import jwt from "jsonwebtoken";
import userSchema from "../models/user.model.js";
import dotenv from "dotenv";


dotenv.config();

export const authenticate = async (req, res, next) => {

  const token  = req.headers.authorization;

  if (!token)
  {
    return res.status(401).json({
      message: "Unauthorized , Token not found",
    });
  }
  
  const data = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userSchema.findById(data.id);
  
  req.user = user;
  
    next();
  
};
