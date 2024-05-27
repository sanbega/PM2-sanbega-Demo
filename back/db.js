const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URIMONGO;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB", err);
  });
