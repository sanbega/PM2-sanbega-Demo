const mongoose = require("mongoose");
const currentYear = new Date().getFullYear();
const urlPattern =
  /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(:\d{1,5})?(\/.*)?$/i;

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true, min: 1900, max: currentYear },
  director: { type: String, required: true },
  duration: { type: String },
  genre: [String],
  rate: { type: Number },
  poster: {
    type: String,
    required: true,
    match: [urlPattern, "Por favor ingresa una URL válida"],
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
