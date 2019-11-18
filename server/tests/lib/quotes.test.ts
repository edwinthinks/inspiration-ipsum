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
    it("should return groups of at least 1 quote", async () => {
      Quotes.getGroup(4).forEach(group => {
        group.forEach(quote => {
          expect(Quotes.quotes).to.include(quote);
        });
      });
    });
    it("should return same number of groups of quotes as the parameter provided", async () => {
      let groups: number = 4;
      expect(Quotes.getGroup(groups).length).to.equal(groups);
    });
  });
});
