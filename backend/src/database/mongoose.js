const mongoose = require("mongoose");

mongoose
  .connect(
    "-"
  )
  .then(console.log("Conexiunea la BD OK"))
  .catch((e) => console.log(`Probleme la BD: ${e}`));
