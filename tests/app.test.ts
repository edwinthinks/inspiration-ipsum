import { expect } from "chai";
import request from "supertest";

import { app } from "../src/app";

describe("Get /users", () => {
  it("should return 200 and hardcoded users", async () => {
    await request(app)
      .get("/users")
      .expect(200)
      .expect((res: any) => {
        // For objects you need to deep equal
        expect(res.body).to.deep.equal([
          {
            id: 1,
            username: "samsepi0l"
          },
          {
            id: 2,
            username: "D0loresH4ze"
          }
        ]);
      });
  });
});
