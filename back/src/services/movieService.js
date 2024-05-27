// "https://students-api.up.railway.app/movies";
const db = require("../../db");
const Movie = require("../models/movie");

class Movies {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!title || !director || !genre || !year) {
      throw new Error("Todos los campos son obligatorios.");
    }
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

async function getAllMovies() {
  try {
    const movies = await Movie.find();
    return movies.map(
      (movie) =>
        new Movies(
          movie.title,
          movie.year,
          movie.director,
          movie.duration,
          movie.genre,
          movie.rate,
          movie.poster
        )
    );
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    throw error;
  }
}

const createMovie = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    await newMovie.save();
    return newMovie;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw new Error("Error creating movie: " + error.message);
  }
};

module.exports = {
  getAllMovies,
  Movies,
  createMovie,
};




app.use((req, res, next) => {
  console.log("Middelware")
  next ()
})

var x = 'outer scope'
(function() {
  console.log(x)
  var x = 'inner scope'
}) ();

const bookSchema = new mongoose.Schema({
  title: String,
  author:{
    type: mongoose.Schema.Types.ObjectID,
    ref:'Author'
  }
})

test('test description', () => {
  function divide(a,b){
    return a/b
  }
  expect(divide(6,0)).toBe(Infinity)
})

function bar() {
  console.log(myVar)
  
}

function foo() {
  var myVar= 2
  bar()
  
}

var myVar = 1
foo()