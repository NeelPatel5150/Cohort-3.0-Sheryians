const imagekit = require("../config/imagekit.config");

const create = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "Please upload an image",
      });
    }

    const uploadedFile = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: "uploads",
    });

    res.status(201).json({
      message: "File uploaded successfully",
      imageUrl: uploadedFile.url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "File upload failed",
      error: error.message,
    });
  }
};

module.exports = {
  create,
};
