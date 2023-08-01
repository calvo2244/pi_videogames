const { Router } = require('express');
const genresRoutes = Router()
const { getAllGenres,posAllGenres } = require("../controllers/genres.Controllers")

genresRoutes.get("/genres", getAllGenres)
genresRoutes.post("/genres", posAllGenres)


module.exports = genresRoutes

// http://localhost:3001/genres