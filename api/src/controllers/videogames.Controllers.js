const axios = require("axios");
const { Videogame } = require('../db');
const { API_HOST, API_KEY } = process.env;
const { getAllVideogamesAPI, getAllVideogamesApiID } = require("./Api.controller")
const { getAllVideogamesDB, getAllVideogamesBdId } = require("./Bd.controller")

console.log("cargando controller videogames");

const getAllVideogames = async (req, res) => {
    try {
        const resAllGamesApi = await getAllVideogamesAPI();
        const resAllGamesBd = await getAllVideogamesDB();
        const resAllGames = resAllGamesBd.concat(resAllGamesApi);
        console.log({ msg: "succes: Get Videogames in API and DB" })
        return res.status(200).json(resAllGames);
    }
    catch (error) {
        console.log({ msg: "error: Get Videogames in API and DB" })
        res.status(404).end(error.message);
    }
};

const getIDVideogame = async function (req, res) {
    try {
        const { idVideogame } = req.params;

        const resGamesApi = await getAllVideogamesApiID(idVideogame);
        const resGamesBd = await getAllVideogamesBdId(idVideogame);
        const newvidgameId = await resGamesApi.finAll({ include: resGamesApi });
        console.log({ msg: "succes: Get Videogames for ID in API and DB" })
        res.status(200).json(resGamesBd);
    } catch (error) {
        console.log({ msg: "error: Get Videogames For ID in API and DB" })
        res.status(404).end(error.message);
    }
};

const getNameVideogames = async function (req, res) {
    const { name } = req.query;
    try {
        console.log("==============>", name);
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
        // console.log(apigames);
        res.status(200).json(apigames)
    } catch (error) {
        res.status(404).end(error.message);
    }
};



const postCreateVideogame = async function (req, res) {
    // console.log("se realiza un: postCreateVideogame para ingresar datos a la tabla videogames en postgress");
    // console.log(Videogame);
    try {
        const { name, description, platforms, image, released, rating } = req.body;

        if (!name || !description || !released || !rating || !image) {
            return res.status(500).json({ message: "el nombre y descripcion es obligatorio" })
        }
        const newvideo = {
            // id,
            name,
            description,
            platforms,
            image,
            released,
            rating,
        };
        console.log(":: POST ::", newvideo);
        const newVideogame = await Videogame.create(newvideo);
        res.status(200).end("videogame creado correctamente");
    } catch (error) {
        res.status(402).end("post postCreateVideogameerror al crear un videogame");
    }
}
module.exports = {
    getAllVideogames,
    getIDVideogame,
    getNameVideogames,
    postCreateVideogame,
};