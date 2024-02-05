const express = require('express');
const routes = require('./Routes/route');
const mongoose = require("./config/config.mongo");

const app = express();

app.use(express.json());

app.use("/api", routes);

app.get("/health", (req, res) => {
    res.status(200).send("All OK!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
 });