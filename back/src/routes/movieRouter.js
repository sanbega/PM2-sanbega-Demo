const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

router.get("/movies", movieController.getAllMovies);
router.post("/movies", movieController.createMovie);

module.exports = router;
