# Inspiration Ipsum

![Semaphore Build Status](https://edwinthinks.semaphoreci.com/badges/inspiration-ipsum.svg?key=148b5cc1-dd61-4640-b59f-e1f621e1a402)

A lorem ipsum generator using inspirational quotes. Use text that inspires in your projects!

Built using typescript with express & react.

Deployments are found at [https://inspiration-ipsum.herokuapp.com/](https://inspiration-ipsum.herokuapp.com/)

## Installation & Getting Started

You'll need to have these installed:

- Node 10.15.3
- NPM 6.4.1

Clone the repository

```
git clone https://github.com/edwinthinks/inspiration-ipsum.git
```

Navigate to the project folder

```
cd inspiration-ipsum/
```

Install dependencies for server and client with:

```sh
npm run prep
```

Install [node-foreman](https://github.com/strongloop/node-foreman):

```
npm install -g foreman
```

Start the development server:

```sh
npm run develop
```

Visit [http://localhost:3000/](http://localhost:3000), should have the page running.

## Testing Practices

### Testing Controllers & Routes

The goal of controller tests is to provide confidence that:

- Routing works, the url invokes the correct controller.
- Controllers respond with the correct status code, header, and content.

What it should not be testing is external dependencies or services that the
controller utilizes. For example a function in `QuotesController` does not
really care how the dependency `Quotes` functions. Rather all it cares about
is the `Quotes` provides a predictable value and the function or endpoint
behaves in the right way. Check out `quotes_controller.test.js`

To accomplish this we need to stub (force a specific outcome) from depedencies
and invoke the controller through a 'fake' request to a temporary test server.
A bit of foundational work is required to make this work but afterwards it should
be very straightforward.

First, we need encapsulate the creation of a server instance. In this case, we
encapsulated the creation of server instances within a class (look in `server.ts`). This
will be used to generate servers testing and non-testing environments. Here is a sample
of what this looks like:

```typescript
import express, { Application } from "express";
import router from "./router";

class Server {
  public environment: string;
  public port: number;
  public app: express.Application;

  constructor() {
    this.environment = process.env.NODE_ENV
      ? process.env.NODE_ENV
      : "development";

    if (this.environment !== "test") {
      this.port = Number(process.env.PORT) || 3000;
    } else {
      this.port = 9999;
    }

    this.app = express();
  }

  /**
   * Returns a instance of a running express application.
   *
   * @returns {object}
   */
  public start(): object {
    this.app.use(router);

    return this.app.listen(this.port, () => {
      if (this.environment !== "test") {
        console.log(`Starting app on port ${this.port}`);
      }
    });
  }
}

export default Server;
```

Second, we utilize two libraries [sinonjs](https://sinonjs.org/) and [supertest](https://github.com/visionmedia/supertest) to
now force dependencies to behave a specific way and to invoke a call to the test server instance. Here you see that we stub in
the before and after blocks and then invoke the call using `supertest`.

```typescript
import { expect } from "chai";
import sinon, { SinonSandbox } from "sinon";
import request from "supertest";

import Server from "../../src/server";
import Quotes from "../../src/lib/quotes";
import QuotesController from "../../src/controllers/quotes_controller";

describe("QuotesController", () => {
  let sinonSandbox: SinonSandbox;
  let server: any;

  beforeEach(() => {
    // Create a sandbox instance to easily restore all
    // function behavior after the test runs.
    sinonSandbox = sinon.createSandbox();
    // Start a 'fake' server. This is fake because the
    // NODE_ENV=test when running.
    server = new Server().start();
  });

  afterEach(() => {
    // After each test we want to restore the function
    // behaviors.
    sinonSandbox.restore();
    // And close the fake server.
    server.close();
  });

  describe("index", async () => {
    let fakeQuotes = [
      { quote: "Fake", author: "Fake Author" },
      { quote: "Fake 2", author: "Fake Author 2" }
    ];

    beforeEach(() => {
      // Stub the output of Quotes to provide a specific
      // and expected output
      sinonSandbox.stub(Quotes, "getAll").returns(fakeQuotes);
    });

    it("returns 200 and a collection of quotes", async () => {
      await request(server)
        .get("/api/quotes")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          expect(response.body).to.deep.equal(fakeQuotes);
        });
    });
  });
});
```

Finally you should be able to confidently test your routes and your
controllers using this approach.

## Learning Resources

I like to keep a catalog or record of articles I found useful in my production of the code. I think it is good to give credit to those that helped me :).

- I setup my project with express /w typescript from this [article](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d), by Andre Gardi.

- Setup eslint with typescript using this [article](https://javascriptplayground.com/typescript-eslint/)

- Express file structure was inspired by the article [here](https://www.terlici.com/2014/08/25/best-practices-express-structure.html)

**PRs are welcome**
