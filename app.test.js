import request from "supertest";
import { createApp } from "./app.js";

describe("GET /", () => {
  it("should return hello message", async () => {
    const app = createApp();

    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.text).toContain("Hello");
  });
});
