const express = require("express");
const app = express();
const fileRoutes = require("./routes/file.route");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/file", fileRoutes);

module.exports = app;
