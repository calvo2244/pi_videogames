const { Router } = require("express");
const videogamesRouter = Router();
const {
    getAllVideogames,
    getIDVideogame,
    getNameVideogames,
    postCreateVideogame
} = require("../controllers/videogames.Controllers.js")

videogamesRouter.get("/videogames", getAllVideogames);
videogamesRouter.get("/videogames/name", getNameVideogames);
videogamesRouter.get("/videogames/:idVideogame", getIDVideogame);
videogamesRouter.post("/videogames", postCreateVideogame);

module.exports = videogamesRouter;

// ROUTES
// http://localhost:3001/allvideogames
// http://localhost:3001//videogames/5
// http://localhost:3001/videogames/name?name=4564  /videogames/name?="..."
// http://localhost:3001/videogames

