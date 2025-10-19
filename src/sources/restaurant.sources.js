import express from "express";
import { getRestaurants, addRestaurant } from "../controllers/restaurant.controller.js";

const router = express.Router();

// GET /api/restaurants
router.get("/", getRestaurants);

// POST /api/restaurants
router.post("/", addRestaurant);

export default router;
