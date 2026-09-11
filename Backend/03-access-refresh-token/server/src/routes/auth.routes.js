import bcrypt from "bcryptjs";
import { Router } from "express";
import User from "../models/user.model.js";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";

const router = Router();

/**
 * @POST /api/auth/register
 */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      message: "User already exists",
      errors: [
        {
          field: "email",
          message: "Email is already registered",
        },
      ],
    });
  }

  const newUser = new User({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  const { accessToken, refreshToken } = generateTokens({ userId: newUser._id });

  newUser.refreshToken = refreshToken;
  await newUser.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(201).json({
    message: "User registered successfully",
    data: {
      name: newUser.name,
      email: newUser.email,
    },
    accessToken,
  });
});

/**
 * @GET /api/auth/me
 */

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const decoded = verifyAccessToken(accessToken);

    const user = await User.findById(decoded.id).select(
      "-passwordHash -refreshToken",
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User retrieved successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid access token",
    });
  }
});

/**
 * @POST /api/auth/refresh
 */
router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized: Refresh token not provided",
    });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      if (user) {
        user.refreshToken = null;
        await user.save();
      }

      return res.status(401).json({
        message: "Unauthorized refresh token Mismatch",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userId: user._id,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    user.refreshToken = newRefreshToken;
    await user.save();

    res.status(200).json({
      message: "Tokens refreshed successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid refresh token",
    });
  }
});

export default router;
