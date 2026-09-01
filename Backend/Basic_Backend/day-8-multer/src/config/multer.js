const multer = require("multer");

const storage = multer.diskStorage({ // this can be save to disk instead of sending it as a buffer to the server
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log("File Name:-->",file);
    cb(null, Date.now() + "-" + file.originalname);
  }
});

//const storage = multer.memoryStorage();  //this can be send as a buffer to the server instead of saving it to disk

const upload = multer({ storage: storage });

module.exports = upload;
