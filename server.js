const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files from public folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`SmartBite server running on http://localhost:${PORT}`);
});