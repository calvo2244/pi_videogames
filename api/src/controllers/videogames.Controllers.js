const axios = require("axios");
const { Videogame, Genre } = require('../db');
const { API_HOST, API_KEY } = process.env;
const { getAllVideogamesAPI, getAllVideogamesApiID } = require("./Api.controller")
const { getAllVideogamesDB, getAllVideogamesBdId } = require("./Bd.controller")

console.log("cargando controller videogames");

const getAllVideogames = async (req, res) => {
    try {
        const resAllGamesApi = await getAllVideogamesAPI();
        const resAllGamesBd = await getAllVideogamesDB();
        const resAllGames = resAllGamesBd.concat(resAllGamesApi);
        console.log({ msg: "succes: Get All Videogames in API and DB" })
        return res.status(200).json(resAllGames);
    }
    catch (error) {
        console.log({ msg: "error: Get All Videogames in API and DB" })
        res.status(404).end(error.message);
    }
};

const getIDVideogame = async function (req, res) {
    try {
        const { idVideogame } = req.params;

        if (idVideogame.length > 16) {
            const resGamesBd = await getAllVideogamesBdId(idVideogame);
            console.log("::::::::", Object.keys(resGamesBd).length);
            console.log({ msg: "succes: Get Videogames for ID /db" })
            return res.status(200).json(resGamesBd)
        }
        else {
            const resGamesApi = await getAllVideogamesApiID(idVideogame);
            console.log("::::::::", Object.keys(resGamesApi).length);
            console.log({ msg: "succes: Get Videogames for ID /db" })
            return res.status(200).json(resGamesApi)
        }

    } catch (error) {
        console.log({ msg: "error: Get Videogames For ID in API and DB" })
        res.status(404)//.end(error.message);
    }
};

const getNameVideogames = async function (req, res) {
    const { name } = req.query;
    try {
        // console.log("==============>", name);
        const resVieogameApi = (await axios.get(`${API_HOST}games${API_KEY}&search=${name}`)).data.results
        let apigames = resVieogameApi.map((game) => {
            let newgame = {
                id: game.id,
                name: game.name,
                platforms: game.platforms.map((plat) => plat.platform.name),
                image: game.background_image,
                released: game.released,
                rating: game.rating,
                genres: game.genres.map((genre) => genre.name)
            }
            return newgame;
        });
        console.log({ msg: "succes: Get Videogames for Name Api/" })
        res.status(200).json(apigames)
    } catch (error) {
        console.log({ msg: "Error: Get Videogames for Name " })
        res.status(404).end(error.message);
    }
};



const postCreateVideogame = async function (req, res) {
    // console.log("se realiza un: postCreateVideogame para ingresar datos a la tabla videogames en postgress");
    // console.log(Videogame);
    try {
        const { name, description, platforms, image, released, rating, genres } = req.body;

        if (!name || !description || !released || !rating || !image) {
            return res.status(500).json({ message: "Faltan campos obligatorio" })
        }
        const newvideo = {
            name,
            description,
            platforms,
            image,
            released,
            rating,

        };
        // crea los videogames
        const newVideogame = await Videogame.create(newvideo);
        // buscamso todos los Genres
        const addGenres = await Genre.findAll({
            where: {
                name: genres
            }
        })
        // se realiza la relacion 
        await newVideogame.addGenre(addGenres)
        // encuentro en la tabla el genero correspondiente al game

        const gameRelation = await Videogame.findOne({
            where: {
                id: newVideogame.id,
            },
            include: [{
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            }]
        })


        // console.log(":: POST ::", newvideo);
        // const newVideogame = await Videogame.create(newvideo);
        res.status(200).end("videogame creado correctamente");
    } catch (error) {
        res.status(402).json(error.message);
    }
}
module.exports = {
    getAllVideogames,
    getIDVideogame,
    getNameVideogames,
    postCreateVideogame,
};