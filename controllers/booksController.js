const booksService = require("../services/booksService");

async function createBook(req, res) {
   try {
      console.log("____Req Body", req.body);

      const book = await booksService.createBook(req.body);
      res.status(201).json(book);
   } catch (error) {
      // Handle error (e.g., duplicate ID)
      console.error(error);
      res.status(500).send("Internal Server Error");
   }
}

module.exports = { createBook };
