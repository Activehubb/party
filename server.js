const app = require("./backend/app");
const dbConnect = require("./backend/config/dbconfig");
const dotenv = require("dotenv");
const { engine } = require("express-handlebars");
const cloudinary = require("cloudinary");
const path = require("path");
const express = require("express");
const cors = require("cors");
dotenv.config({ path: "./backend/config/config.env" });

app.engine("handlebars", engine());

app.set("view engine", "handlebars");
app.set("views", "./backend/views");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

process.on("uncaughtException", (err) => {
  console.log(err.message),
    console.log(`Shutting down due to uncaught exception`);
  process.exit(1);
});

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;

dbConnect();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"))
);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${MODE} mode`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Server ERR: ${err.message}`),
    console.log(`Shutting down server due to unhandled error rejections`),
    server.close(() => process.exit(1));
});
