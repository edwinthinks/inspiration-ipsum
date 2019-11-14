import { expect } from "chai";
import request from "supertest";

import { app } from "../src/app";

describe("Get /", () => {
  it("should return 200 and a hello world object", async () => {
    await request(app)
      .get("/")
      .expect(200)
      .expect((res: any) => {
        // For objects you need to deep equal
        expect(res.body).to.deep.equal({ hello: "world" });
      });
  });
});
