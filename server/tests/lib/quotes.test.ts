import { expect } from "chai";
import sinon, { SinonSandbox } from "sinon";
import Quotes from "../../src/lib/quotes";

describe("Quotes", () => {
  let sinonSandbox: SinonSandbox;

  beforeEach(() => {
    sinonSandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sinonSandbox.restore();
  });

  describe("getAll", async () => {
    it("should return all quotes", async () => {
      expect(Quotes.getAll()).to.equal(Quotes.quotes);
    });
  });

  describe("getRandom", async () => {
    // Fix the result of randomization and make sure
    // the results match
    let randomizedIndex: number = 1;

    beforeEach(() => {
      // Replace the output of Math.floor with a pre-fixed value
      sinonSandbox.stub(Math, "floor").returns(randomizedIndex);
    });

    it("should return a single randomized quote", async () => {
      expect(Quotes.getRandom()).to.equal(Quotes.quotes[randomizedIndex]);
    });
  });

  describe("getGroup", async () => {
    it("should return groups of quotes", async () => {
      expect(Quotes.getGroup()).to.equal(Quotes.quotes);
    });
  });
});
