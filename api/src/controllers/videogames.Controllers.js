const axios = require("axios");
const { Videogame } = require('../db');
const { API_HOST, API_KEY } = process.env;

console.log("cargando controller videogames");

const getAllVideogames = async (req, res) => {
    let resVideogamesFinal = [];
    // console.log(`":: GET_ALL ::" ,${API_HOST}games${API_KEY}`);
    //Data DB
    try {
        const resVideogamesBd = await Videogame.findAll();
        resVideogamesFinal = resVideogamesFinal.concat(resVideogamesBd);
        // console.log("::::::::::::: final ===>  ",resVideogamesFinal);
    }
    catch (error) {
        console.log("No se encontraron video Games en la BD");
        res.status(404).end(error.message);
    }
    //Data API    
    let apigames = [];
    try {
        const resVideogamesApi = await axios.get(`${API_HOST}games${API_KEY}`)
        const resApiGame = resVideogamesApi.data.results;
        let apigames = resApiGame.map((game) => {
            let newgame = {
                id: game.id,
                name: game.name,
                description: game.description,
                platforms: game.platforms.map((plat) => plat.platform.name),
                image: game.background_image,
                released: game.released,
                rating: game.rating,
                genres: game.genres.map((genre) => genre.name)
            }
            return newgame;
        });
        resVideogamesFinal = resVideogamesFinal.concat(apigames)
        return res.status(200).json(resVideogamesFinal);
    }

    catch (error) {
        console.log("No se encontraron video Games en la API");
        res.status(404).end(error.message);
    }

};

const getIDVideogame = async function (req, res) {//ok
    try {
        const { idVideogame } = req.params;
        console.log((`":: GET_ID ::"  ${API_HOST}games/${idVideogame}${API_KEY}`));
        const resVideogame = await axios.get(`${API_HOST}games/${idVideogame}${API_KEY}`);
        //destructuring para extraer los datos necesarios 
        const { name, description, platforms, background_image, released, rating, genres } = resVideogame.data;
        const newvidgameId = {
            name: name,
            description: description,
            platforms: platforms.map((plat) => plat.platform.name),
            image: background_image,
            released: released,
            rating: rating,
            genres: genres.map((gen) => gen.name)
        };

        res.status(200).json(newvidgameId);
    } catch (error) {
        res.status(404).end(error.message);
    }
};

const getNameVideogames = async function (req, res) {
    console.log("getVideogamesName");
    // console.log("http://localhost:3001/videogames/name?name=4564"); 
    const nombre = req.query.name;
    try {
        console.log((`":: GET_NAME ::" ${API_HOST}games${API_KEY}&search=${nombre}`));
        console.log(nombre);
        // const database = await user.findAll({where:{name:"paramettro a buscar "}})
    } catch (error) {
        res.status(404).end(error.message);
    }
    res.send("Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.");
};



const postCreateVideogame = async function (req, res) {
    // console.log("se realiza un: postCreateVideogame para ingresar datos a la tabla videogames en postgress");
    // console.log(Videogame);
    try {
        const { name, description, plataformms, image, released, rating } = req.body;

        if (!name || !description) {
            return res.status(500).json({ message: "el nombre y descripcion es obligatorio" })
        }
        const newvideo = {
            // id,
            name,
            description,
            // plataforms,
            // imagen,
            // fecha_de_lanzamiento,
            // rating,
        };
        console.log(":: POST ::", newvideo);
        const newVideogame = await Videogame.create(newvideo);
        res.status(200).end("videogame creado correctamente", newVideogame);
    } catch (error) {

        res.status(402).end("post postCreateVideogame");
    }
}
module.exports = {
    getAllVideogames,
    getIDVideogame,
    getNameVideogames,
    postCreateVideogame,
};