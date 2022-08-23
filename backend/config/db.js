const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.x5tdw.mongodb.net/bougie",
    {
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("CONNECTE A LA DB"))
  .catch((err) => console.log("ERREUR DE CONNECTION A LA DB", err));

module.exports = mongoose;