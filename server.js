// app.js
require("dotenv").config();
const express = require("express");
const routes = require("./routes/route");
const mongoose = require("./config/config.mongo");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
   res.send("Hello, World!");
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
