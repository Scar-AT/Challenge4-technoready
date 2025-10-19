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

export default app;
