const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://calin:calin@cluster0.7eua3.mongodb.net/spotlight?retryWrites=true&w=majority"
  )
  .then(console.log("Conexiunea la BD OK"))
  .catch((e) => console.log(`Probleme la BD: ${e}`));
