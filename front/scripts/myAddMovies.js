const axios = require("axios");

let myAddMovies = () => {
  axios
    .get("http://localhost:3000/movies")
    .then((response) => {
      console.log("Datos:", response.data);

      const movies = response.data.movies;
      movies.forEach((movie) => {
        let movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        let img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.title;
        img.classList.add("movies");

        let title = document.createElement("h4");
        title.textContent = movie.title;

        let genre = document.createElement("p");
        genre.textContent = `Genre: ${movie.genre.join(", ")}`;

        let duration = document.createElement("p");
        duration.textContent = `Duration: ${movie.duration}`;

        let rate = document.createElement("p");
        rate.textContent = `Rate: ${movie.rate}`;

        movieCard.appendChild(img);
        movieCard.appendChild(title);
        movieCard.appendChild(genre);
        movieCard.appendChild(duration);
        movieCard.appendChild(rate);

        let myMoviesContainer = document.querySelector(
          ".scroll-movies .scroll-images"
        );

        myMoviesContainer.appendChild(movieCard);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
};

myAddMovies();

module.exports = myAddMovies;
