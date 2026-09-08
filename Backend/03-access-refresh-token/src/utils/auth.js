import jwt from "jsonwebtoken";
import config from "../config/config.js";
import User from "../models/user.model.js";


export const generateTokens = ({userId}) => {

  const accessToken = jwt.sign(
    { id: userId }, 
    config.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { id: userId },
    config.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
}


export function verifyAccessToken(token) {
  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid access token");
  }
}

export function verifyRefreshToken(token) {
  try {
    const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
}
