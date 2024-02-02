const Book = require("../models/bookModel");

async function createBook(bookData) {
   try {
      const newBook = await Book.create(bookData);
      return newBook;
   } catch (error) {
      throw error;
   }
}

module.exports = { createBook };
