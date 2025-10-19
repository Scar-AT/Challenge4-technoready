import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { Restaurant } from "../src/models/restaurant.model.js";

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

(async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    console.log(`Connected to database: ${dbName}`);

    const count = await Restaurant.countDocuments();
    console.log(`Restaurants in DB: ${count}`);
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
})();
