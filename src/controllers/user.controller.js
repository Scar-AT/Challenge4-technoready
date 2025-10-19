import { User } from "../models/user.model.js";

// GET /api/users
export const getUsers = async (_req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

// GET /api/users/:id
export const getUserById = async (req, res) => {
  try {
    const doc = await User.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "User not found" });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
};

// POST /api/users
export const addUser = async (req, res) => {
  try {
    if (!req.body?.name) {
      return res.status(400).json({ message: "Field 'name' is required" });
    }
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error adding user", error });
  }
};

// PUT /api/users/:id
export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error });
  }
};

// DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted", id: deleted._id });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
