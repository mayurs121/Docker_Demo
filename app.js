import express from "express";

export function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello from Express + MongoDB 🚀");
  });

  return app;
}
