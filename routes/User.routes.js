import express from "express";
import protect from "../Middleware/AuthMiddleware.js";

import {
  login,
  register,
  profile,
  updateProfile,
} from "../controllers/user.js";
const userRouter = express.Router();

// Login
userRouter.post("/login", login);

// Register
userRouter.post("/", register);

// profile
userRouter.get("/profile", protect, profile);

// Update profile
userRouter.put("/profile", protect, updateProfile);

export default userRouter;
