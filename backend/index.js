const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Backend API is healthy",
    environment: process.env.NODE_ENV || "development"
  });
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Node.js backend"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});