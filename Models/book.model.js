const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
   id: { type: Number, required: true},
   title: { type: String, required: true },
   author: { type: String, required: true },
   genre: { type: String, required: true },
   price: { type: Number, required: true },
});

bookSchema.set('toJSON', {
   transform: (doc, ret) => {
    //  ret.id = ret._id;
     delete ret._id;
     delete ret.__v;
     return ret;
   },
 });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

