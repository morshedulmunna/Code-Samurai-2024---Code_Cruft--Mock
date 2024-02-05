const mongoose = require("mongoose");

const url = process.env.DB_CONNECTION_URL;

mongoose.connect(url, {
   useNewUrlParser: true, // This option is not required in newer versions but should not cause an issue
   useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
   console.log("Connected to MongoDB");
});


module.exports = mongoose;