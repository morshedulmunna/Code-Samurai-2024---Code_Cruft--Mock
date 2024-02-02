const express = require("express");
const booksController = require("../controllers/booksController");

const router = express.Router();

router.post("/books", booksController.createBook);

module.exports = router;
