import { expect } from "chai";
import sinon from "sinon";
import Quotes from "../../src/lib/quotes";

describe("Quotes", () => {
  describe("getRandomSingle", () => {
    // Fix the result of randomization and make sure
    // the results match
    let randomizedIndex: number = 1;
    let sinonSandbox: any;

    beforeEach(() => {
      sinonSandbox = sinon.createSandbox();
      // Replace the output of Math.floor with a pre-fixed value
      sinonSandbox.stub(Math, "floor").returns(randomizedIndex);
    });

    afterEach(() => {
      // Reset the stubs
      sinonSandbox.restore();
    });

    it("should return a single randomized quote", async () => {
      expect(Quotes.getRandomSingle()).to.equal(Quotes.quotes[1]);
    });
  });
});
