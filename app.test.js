import request from "supertest";
import app from "./app.js";

describe("GET /", () => {
  it("returns the hello message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Hello from Express + MongoDB");
  });
});
