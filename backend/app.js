const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const errorMiddleware = require("./middlewares/errors");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();
const eventRoute = require("./route/eventRoute");
const userRoute = require("./route/userRoute");
const ticketRoute = require("./route/ticketRoute");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());

app.use("/api/v1/", userRoute);
app.use("/api/v1/", eventRoute);
app.use("/api/v1/", ticketRoute);

app.use(errorMiddleware);
module.exports = app;
