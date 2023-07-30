const { Router } = require('express');
const genresRoutes = Router()
const { getAllGenres } = require("../controllers/genres.Controllers")

genresRoutes.get("/genres", getAllGenres)


module.exports = genresRoutes

// http://localhost:3001/genres