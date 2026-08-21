const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://neelp2106_db_user:mivB5pQPDdqyK8Qy@cluster0.f2hn5ww.mongodb.net/test?retryWrites=true&w=majority",
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
