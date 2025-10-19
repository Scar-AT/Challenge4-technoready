import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

export async function connectDB(dbName = "tattler") {
  try {
    await client.connect();
    console.log(`Connected to MongoDB`);
    const db = client.db(dbName);
    return { db, client };
  } catch (err) {
    console.error("Connection failed:", err);
  }
}
