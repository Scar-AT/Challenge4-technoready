import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { User } from "../src/models/user.model.js";

const dbName = process.env.DB_NAME;

(async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    console.log(`Connected to database: ${dbName}`);

    const count = await User.countDocuments();
    console.log(`Users in DB: ${count}`);
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
})();
