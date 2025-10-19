import { Restaurant } from "../models/restaurant.model.js";

/**
 * Get all restaurants with optional filters and sorting
 */
export const getRestaurants = async (req, res) => {
  try {
    const { name, borough, cuisine, sort, limit = 50, page = 1 } = req.query;

    // Build dynamic filter
    const filter = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (borough) filter.borough = { $regex: borough, $options: "i" };
    if (cuisine) filter.cuisine = { $regex: cuisine, $options: "i" };

    // Sorting logic
    let sortOption = {};
    if (sort) {
      const direction = sort.startsWith("-") ? -1 : 1;
      const field = sort.replace("-", "");
      sortOption[field] = direction;
    }

    // Pagination
    const skip = (page - 1) * limit;

    const restaurants = await Restaurant.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving restaurants", error });
  }
};


// Add a new restaurant
export const addRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: "Error adding restaurant", error });
  }
};
