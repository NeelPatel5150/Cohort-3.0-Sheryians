import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  MONGO_URI: process.env.MONGO_URI,
};

export default config;
