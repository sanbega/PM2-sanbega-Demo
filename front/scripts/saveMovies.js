
document.getElementById("clearMovies").addEventListener("click", function () {
  document.getElementById("title").value = "";
  document.getElementById("director").value = "";
  document.getElementById("poster").value = "";
  document.getElementById("year").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("rate").value = "";
  console.log("Formulario limpiado");
});

document
  .getElementById("addMovies")
  .addEventListener("click", async function () {
    console.log("Botón 'Guardar!' clickeado");
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const poster = document.getElementById("poster").value;
    const year = document.getElementById("year").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value;
    const rate = document.getElementById("rate").value;

   

    if (title && director && poster && year && duration && genre && rate) {
      try {
        const response = await axios.post("http://localhost:3000/movies", {
          title,
          director,
          poster,
          year,
          duration,
          genre,
          rate,
        });
        alert("Película creada exitosamente");
      } catch (error) {
        alert("Error al crear la película");
        console.error("Error al crear la película:", error);
      }
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
