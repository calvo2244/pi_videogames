const axios = require("axios")
const { Genre } = require("../db.js")
const { API_HOST, API_KEY } = process.env;

console.log("cargando controller de genders");

const getAllGenres = async (req, res) => {
    //Data DB
    try {
        const resGenresBd = await Genre.findAll();
        res.status(200).json(resGenresBd)
    }
    catch (error) {
        console.log("No se encontraron Genres en la BD");
        res.status(404).end(error.message);
    }
};

const posAllGenres = async (req, res) => {
    try {
        const tamgenre = await Genre.findAll()
        console.log(tamgenre.length);
        if (tamgenre.length === 0) {
            const resgenres = await axios.get(`${API_HOST}genres${API_KEY}`);
            const newDtaGenres = resgenres.data.results;
            let datagenres = newDtaGenres.map((gen) => {
                let newdgenres = {
                    id: gen.id,
                    name: gen.name
                }
                return newdgenres;
            })
            for (let index = 0; index < datagenres.length; index++) {
                await Genre.create(datagenres[index]);
            }
            res.status(200).end("Genre creado correctamente")
        }  else       
            res.status(200).end("Genre ya Se encuentra en la DB ")        

    } catch (error) {
        console.log("no se obtienen generos")
        res.status(404).end(error.message)
    }
}
module.exports = {
    getAllGenres,
    posAllGenres,
};