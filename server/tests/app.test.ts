import { expect } from "chai";
import request from "supertest";

import { app } from "../src/app";

describe("Get /api/users", () => {
  it("should return 200 and a fake array of user objects", async () => {
    await request(app)
      .get("/api/users")
      .expect(200)
      .expect((res: any) => {
        // For objects you need to deep equal
        expect(res.body).to.deep.equal([
          {
            id: 1,
            name: "Edwin"
          },
          {
            id: 2,
            name: "Edward"
          }
        ]);
      });
  });
});
