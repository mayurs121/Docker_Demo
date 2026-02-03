import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 3000;

// IMPORTANT: service name "mongo", not localhost
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/appdb";

let client;

async function connectDB() {
  client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Connected to MongoDB");
}

app.get("/", async (req, res) => {
  res.send("Hello from Express + MongoDB 🚀");
});

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("Mongo connection failed:", err.message);
  }
});
