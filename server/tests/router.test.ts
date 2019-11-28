import sinon, { SinonSandbox } from "sinon";
import request from "supertest";

import Server from "../src/server";

describe("Router", () => {
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

  describe("match non existent route", () => {
    let fakeQuotes = [
      { quote: "Fake", author: "Fake Author" },
      { quote: "Fake 2", author: "Fake Author 2" }
    ];

    beforeEach(() => {
      // Stub the output of Quotes to provide a specific
      // and expected output
      // sinonSandbox.stub(Quotes, "getAll").returns(fakeQuotes);
    });

    it("returns 200 and a collection of quotes", async () => {
      await request(server)
        .get("/unknown-path")
        .expect("Content-Type", /html/)
        .expect(200);
    });
  });
});
