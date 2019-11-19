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
    sinonSandbox = sinon.createSandbox();
    server = new Server().start();
  });

  afterEach(() => {
    sinonSandbox.restore();
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

  describe("random", async () => {
    let randomFakeQuote = { quote: "Fake", author: "Fake Author" };

    beforeEach(() => {
      // Stub the output of Quotes to provide a specific random quote
      sinonSandbox.stub(Quotes, "getRandom").returns(randomFakeQuote);
    });

    it("returns 200 and a single random quote", async () => {
      await request(server)
        .get("/api/quotes/random")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          expect(response.body).to.deep.equal(randomFakeQuote);
        });
    });
  });

  describe("group", async () => {
    let fakeQuotes = [
      [
        { quote: "Fake", author: "Fake Author" },
        { quote: "Fake 2", author: "Fake Author 2" }
      ],
      [
        { quote: "Fake", author: "Fake Author" },
        { quote: "Fake 2", author: "Fake Author 2" }
      ],
      [
        { quote: "Fake", author: "Fake Author" },
        { quote: "Fake 2", author: "Fake Author 2" }
      ],
      [
        { quote: "Fake", author: "Fake Author" },
        { quote: "Fake 2", author: "Fake Author 2" }
      ]
    ];

    let numberOfArgs = 3;

    beforeEach(() => {
      // Stub the output of Quotes to provide a specific quote grouping
      sinonSandbox
        .stub(Quotes, "getGroup")
        .withArgs(numberOfArgs)
        .returns(fakeQuotes);
    });

    it("returns 200 and groups of quotes", async () => {
      await request(server)
        .get(`/api/quotes/group?size=${numberOfArgs}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          expect(response.body).to.deep.equal(fakeQuotes);
        });
    });
  });
});
