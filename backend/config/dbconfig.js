const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.DB_LOCAL_URI,
      console.log("mongoDB connected")
    );
  } catch (error) {
    console.log(`DB err: ${error}`);
  }
};

module.exports = dbConnect;
