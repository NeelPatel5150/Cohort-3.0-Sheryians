const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => {
  try {
    console.log(req.file);

    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while uploading file",
      error: error.message
    });
  }
});

module.exports = router;
