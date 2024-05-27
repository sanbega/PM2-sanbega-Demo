const movieService = require("../services/movieService");

async function getAllMovies(req, res) {
  try {
    const movies = await movieService.getAllMovies();
    res.json({ movies });
  } catch (error) {
    console.error("Error al obtener las películas:", error.message);
    res.status(500).json({ error: error.message });
  }
}
const createMovie = async (req, res) => {
  try {
    const { title, director, poster, year, duration, genre, rate } = req.body;

    if (
      !title ||
      !director ||
      !poster ||
      !year ||
      !duration ||
      !genre ||
      !rate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const movieData = { title, director, poster, year, duration, genre, rate };
    const newMovie = await movieService.createMovie(movieData);

    res
      .status(201)
      .json({ message: "Movie created successfully", movie: newMovie });
  } catch (error) {
    console.error("Error in createMovie controller:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMovies,
  createMovie,
};
