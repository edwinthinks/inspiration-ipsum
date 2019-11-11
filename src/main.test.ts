import { expect } from "chai";
import app from "./main";

describe("addition", () => {
  it("returns 5 when adding 2 and 3", () => {
    expect(2 + 3).to.equal(5);
  });
});
