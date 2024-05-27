const axios = require("axios");

let addMovies = () => {
  axios
    .get("http://localhost:3000/movies")
    .then((response) => {
      const data = response.data;

      if (Array.isArray(data.movies)) {
        data.movies.forEach((movie) => {
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

          let moviesContainer = document.querySelector(
            ".scroll-movies1 .scroll-images"
          );

          moviesContainer.appendChild(movieCard);
        });
      } else {
        console.error("Error: los datos no son un array de películas");
      }
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
};

addMovies();

module.exports = addMovies;
