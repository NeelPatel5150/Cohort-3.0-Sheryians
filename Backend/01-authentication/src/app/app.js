import express from "express";
import jwt from "jsonwebtoken";
import userSchema from "../models/user.model.js";
import { authenticate } from "../middleware/auth.middleware.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Hello, World!",
  });
});
/**
 * Register API
 */
app.post("/api/auth/register", async (req, res) => {

  const { email, name, password } = req.body;

  const user = await userSchema.create({
    email,
    name,
    password: await bcrypt.hash(password, 10)
  });

  const token = jwt.sign(
    {
      
       id: user._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    },
  );

  res.status(201).json({
    message: "User Created Successfully",
    data: {
      user: {
        email, name, id: user._id
      }
    },
    token,
  });
});

/**
 * Auth Me API
 */

app.get("/api/auth/me", authenticate, async (req, res) => {

  res.status(200).json({ user: req.user });

});
/**
 * Login API
 */
app.post("/api/auth/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await userSchema.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Email orPassword",
    });
  }

  const token = jwt.sign(
    {
      id: user._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    },
  );

  res.status(200).json({
    message: "User Login Successful",
    data: {
      user: {
        email: user.email,
        name: user.name,
        id: user._id
      }
    },
    token,
  });

});



export default app;
