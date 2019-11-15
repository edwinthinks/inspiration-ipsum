import { expect } from "chai";
import sinon from "sinon";
import request from "supertest";

import Quotes from "../../src/lib/quotes";
import QuotesController from "../../src/controllers/quotes_controller";

describe("QuotesController", () => {
  describe("index", () => {
    // Use a spy so that we can gather the calls
    // made the the response
    let fakeReq: any;
    let fakeRes: any;
    let fakeQuotes: any = [
      {
        author: "Fake Author",
        quote: "Fake Quote"
      }
    ];

    // Allow each async instance get its own sandbox. This
    // prevents sinon activity from interfering with each other.
    let sinonSandbox: any;

    beforeEach(() => {
      sinonSandbox = sinon.createSandbox();

      // Setup fake output of getQuotes. Not really
      // interested in the implementation of getQuotes
      sinonSandbox.stub(Quotes, "getAll").returns(fakeQuotes);

      // Configure the request to be sent.
      fakeReq = {};
      fakeRes = {
        status: sinonSandbox.spy(),
        json: sinonSandbox.spy()
      };

      // Trigger the request and let the
      QuotesController.index(fakeReq, fakeRes);
    });

    afterEach(() => {
      sinonSandbox.restore();
    });

    it("should return 200", async () => {
      expect(fakeRes.status.calledWith(200)).to.equal(true);
    });

    it("should return the quotes list", async () => {
      expect(fakeRes.json.calledWith(fakeQuotes)).to.equal(true);
    });
  });
});
