import { Restaurant } from "../models/restaurant.model.js";

/**
 * GET /api/restaurants
 * Supports filters: name, borough, cuisine; sorting: ?sort=field or -field
 * Pagination: ?limit=&page=
 */
export const getRestaurants = async (req, res) => {
  try {
    const { name, borough, cuisine, sort, limit = 50, page = 1 } = req.query;

    const filter = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (borough) filter.borough = { $regex: borough, $options: "i" };
    if (cuisine) filter.cuisine = { $regex: cuisine, $options: "i" };

    const sortOption = {};
    if (sort) {
      const dir = sort.startsWith("-") ? -1 : 1;
      const field = sort.replace("-", "");
      sortOption[field] = dir;
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [items, total] = await Promise.all([
      Restaurant.find(filter).sort(sortOption).skip(skip).limit(Number(limit)),
      Restaurant.countDocuments(filter),
    ]);

    res.status(200).json({
      total,
      page: Number(page),
      limit: Number(limit),
      results: items,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving restaurants", error });
  }
};

// GET /api/restaurants/:id
export const getRestaurantById = async (req, res) => {
  try {
    const doc = await Restaurant.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving restaurant", error });
  }
};

// POST /api/restaurants
export const addRestaurant = async (req, res) => {
  try {
    // Minimal guard (extend as you wish)
    if (!req.body?.name) {
      return res.status(400).json({ message: "Field 'name' is required" });
    }
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: "Error adding restaurant", error });
  }
};

// PUT /api/restaurants/:id
export const updateRestaurant = async (req, res) => {
  try {
    const updated = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating restaurant", error });
  }
};

// DELETE /api/restaurants/:id
export const deleteRestaurant = async (req, res) => {
  try {
    const deleted = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json({ message: "Restaurant deleted", id: deleted._id });
  } catch (error) {
    res.status(500).json({ message: "Error deleting restaurant", error });
  }
};
