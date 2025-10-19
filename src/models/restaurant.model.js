import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    restaurant_id: { type: String },       // keep flexible; CSV may include it
    name: { type: String, required: true },
    borough: { type: String },
    cuisine: { type: String },
    address: {
      building: { type: String },
      street: { type: String },
      zipcode: { type: String },
      coord: { type: [Number] },           // [long, lat]
    },
    grades: [
      {
        date: { type: Date },
        grade: { type: String },
        score: { type: Number },
      },
    ],
  },
  { collection: "restaurants", timestamps: false } // explicit mapping
);

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
