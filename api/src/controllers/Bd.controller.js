const { Videogame, Genre } = require('../db');

const getAllVideogamesDB = async () => {
    // Data DB
    try {
        const resVideogamesBd = await Videogame.findAll({
            include: [{
                model: Genre,
                attributes: ['id', 'name'],
                through: { attributes: [] }
            }]
        })

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
        const resVideogamesBd = await Videogame.findByPk(params, 
            {
            include: [{
                model: Genre,
                attributes: ['id', 'name'],
                through: { attributes: [] }
            }]
        }
        )
        console.log(resVideogamesBd);
        const videogamesBdforID = {
            id: resVideogamesBd.id,
            name: resVideogamesBd.name,
            description: resVideogamesBd.description,
            platforms: resVideogamesBd.platforms,
            image: resVideogamesBd.image,
            released: resVideogamesBd.released,
            rating: resVideogamesBd.rating,
            genres: resVideogamesBd.genres,
        }
        console.log({ msg: "succes: Get Videogames for ID in Bd" })
        return (videogamesBdforID);
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