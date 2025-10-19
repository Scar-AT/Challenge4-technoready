import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = process.env.DB_NAME || "ch4-nao";

mongoose
  .connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
  .then(() => {
    console.log(`✅ Connected to database: ${DB_NAME}`);
    app.listen(PORT, () => {
      console.log(`🟢 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
