const { Videogame } = require('../db');

const getAllVideogamesDB = async () => {
    // Data DB
    try {
        const resVideogamesBd = await Videogame.findAll();
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
        const resVideogamesBd = await Videogame.findOne({
            where:{id:params}
        });
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