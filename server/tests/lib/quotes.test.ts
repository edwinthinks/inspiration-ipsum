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

  describe("getAll", () => {
    it("should return all quotes", async () => {
      expect(Quotes.getAll()).toStrictEqual(Quotes.quotes);
    });
  });

  describe("getRandom", () => {
    // Fix the result of randomization and make sure
    // the results match
    let randomizedIndex: number = 1;

    beforeEach(() => {
      // Replace the output of Math.floor with a pre-fixed value
      sinonSandbox.stub(Math, "floor").returns(randomizedIndex);
    });

    it("should return a single randomized quote", async () => {
      expect(Quotes.getRandom()).toBe(Quotes.quotes[randomizedIndex]);
    });
  });

  describe("getGroup", () => {
    it("should return groups of at least 1 quote", async () => {
      Quotes.getGroup(4).forEach(group => {
        group.forEach(quote => {
          expect(Quotes.quotes).toContain(quote);
        });
      });
    });
    it("should return same number of groups of quotes as the parameter provided", async () => {
      let groups: number = 4;
      expect(Quotes.getGroup(groups).length).toBe(groups);
    });
  });
});
