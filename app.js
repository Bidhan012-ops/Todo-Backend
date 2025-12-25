const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo Backend is running 🚀");
});

const mongoURI = process.env.MONGODB_URI;

if (!mongoose.connection.readyState) {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) =>
      console.error("MongoDB connection error:", err)
    );
}

module.exports = app;
