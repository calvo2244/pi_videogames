const { Router } = require("express");
const mainRouter = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogames.Routes.js');
const genresRouter = require('./genres.Routes.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use("/", videogamesRouter);
mainRouter.use("/",genresRouter)


module.exports = mainRouter;
