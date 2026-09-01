import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Hello, World!",
  });
});

app.post("/api/register", (req, res) => {
  const { email, name, password } = req.body;

  
    

  const token = jwt.sign(
    {
      email, name
      // _id
    },
    "a45ea00f8f7401fe129fd6a8c0951139b792c627db465d52f1d6a62eec9ac987",
    {
      expiresIn: "1h"
    },
  );
  res.status(201).json({
    message: "User Created Successfully",
    data: {
      user: {
        email, name,
      }
    },
    token,
  });
});

const PORT = process.env.PORT || 3000;

export default app;
