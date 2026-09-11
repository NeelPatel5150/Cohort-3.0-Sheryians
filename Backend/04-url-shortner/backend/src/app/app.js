import express from "express";
import urlRoutes from "../routes/url.routes.js";
import UrlModel from "../models/url.model.js";

const app = express();

// Middleware
app.use(express.json());

app.use("/api/url", urlRoutes);

app.get("/:code", async (req, res) => {

  const { code } = req.params;

  try {
    const url = await UrlModel.findOne({ shortCode: code });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    await UrlModel.findOneAndUpdate(
      { shortCode: code },
      { $inc: { clicks: 1 } },
    );

    return res.redirect(302, url.originalUrl);

    

  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }

  
});

export default app;
