import express from "express";
import {
  getRestaurants,
  getRestaurantById,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurant.controller.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const router = express.Router();

router.get("/", getRestaurants);
router.get("/:id", validateObjectId, getRestaurantById);
router.post("/", addRestaurant);
router.put("/:id", validateObjectId, updateRestaurant);
router.delete("/:id", validateObjectId, deleteRestaurant);

export default router;
