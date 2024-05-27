const express = require("express");
const morgan = require("morgan");
const movieRouter = require("./routes/movieRouter");
const movieController = require("./controllers/movieController");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", movieRouter);
// app.use("/", movieController.getAllMovies);

app.get("/movies", (req, res) => {
  res.send("Próximamente estarán disponibles los datos de películas.");
});

module.exports = app;
