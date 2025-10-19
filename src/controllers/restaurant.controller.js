import { Restaurant } from "../models/restaurant.model.js";

/**
 * Get all restaurants
 */
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().limit(50); // limit to avoid huge dumps
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving restaurants", error });
  }
};

/**
 * Add a new restaurant
 */
export const addRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: "Error adding restaurant", error });
  }
};
