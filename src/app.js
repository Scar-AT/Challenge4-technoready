import express from "express";
import cors from "cors";

// Routes
import restaurantRoutes from "./routes/restaurant.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("🚀 Tattler API is up and running — powered by ch4-nao");
});

// Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/users", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Centralized error handler (optional usage: next(err) in controllers)
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});


export default app;
