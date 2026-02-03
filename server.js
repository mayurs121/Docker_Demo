import { MongoClient } from "mongodb";
import { createApp } from "./app.js";

const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/appdb";

async function startServer() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();

  const app = createApp();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch(console.error);
