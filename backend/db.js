const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebookk?";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connection successfull");
  });
};

module.exports = connectToMongo;
