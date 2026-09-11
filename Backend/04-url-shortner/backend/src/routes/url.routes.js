import express from "express";
import generateCode from "../utils/generateCode.js";
import UrlModel from "../models/url.model.js";


const router = express.Router();



router.post("/", async (req, res) => { 

  const { url } = req.body;
  
  if(!url){
    return res.status(400).json({error: "URL is required"});
  }

  if((url.startsWith("http://") == false) && (url.startsWith("https://") == false)){
    return res.status(400).json({error: "URL should not start with http:// or https://"});
  }

  if(url.length > 2048){
    return res.status(400).json({error: "URL is too long. Maximum length is 2048 characters."});
  }

  const code = generateCode();

  const newUrl = new UrlModel({
    originalUrl: url,
    shortCode: code
  });

  await newUrl.save();

  return res.status(201).json({
    message: "URL shortened successfully", data: {
      originalUrl: newUrl.originalUrl,
      shortCode: newUrl.shortCode
  }});


});

router.get("/", async (req, res) => {
  try {
    const urls = await UrlModel.find();
    return res.status(200).json({ message: "URLs fetched successfully", data: urls });
  }
  catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;

  try {
    const url = await UrlModel.findOne({ shortCode: code });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }
    return res.status(200).json({ message: "URL fetched successfully", data: url });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
