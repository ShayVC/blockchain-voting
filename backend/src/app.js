// backend/src/app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to Blockchain Voting API 🎉");
});

// Health check route
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Blockchain Voting API is running 🚀" });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
