import express from "express";
import { getUsers, addUser } from "../controllers/user.controller.js";

const router = express.Router();

// GET /api/users
router.get("/", getUsers);

// POST /api/users
router.post("/", addUser);

export default router;
