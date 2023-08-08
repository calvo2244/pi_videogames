const { Videogame } = require('../db');

const getAllVideogamesDB = async () => {
    // Data DB
    try {
        const resVideogamesBd = await Videogame.findAll();
        console.log({ msg: "succes: Get All Videogames in Bd" })
        return (resVideogamesBd);
    }
    catch (error) {
        console.log("No se encontraron video Games en la BD");
        return console.log(error.message);
    }
}
const getAllVideogamesBdId = async (params) => {
    // Data DB
    try {
        const resVideogamesBd = await Videogame.findByPk(params);
        console.log({ msg: "succes: Get Videogames for ID in Bd" })
        return (resVideogamesBd);
    }
    catch (error) {
        console.log("No se encontraron video Games en la BD");
        return console.log(error.message);
    }
}

module.exports = {
    getAllVideogamesDB,
    getAllVideogamesBdId
}