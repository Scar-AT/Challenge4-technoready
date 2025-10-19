import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_id: { type: String },         // matches CSV column
    name: { type: String, required: true },
    email: { type: String },
    role: { type: String, default: "user" },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "users" }              // points to existing CSV import
);

export const User = mongoose.model("User", userSchema);
