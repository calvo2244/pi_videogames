const axios = require("axios")
const { Genre } = require("../db.js")
const { API_HOST, API_KEY } = process.env;

console.log("cargando controller de genders");
const getAllGenres = async (req, res) => {
    try {
        const genres = await axios.get(`${API_HOST}genres${API_KEY}`);
        res.status(200).json(genres.data.results)

    } catch (error) {
        console.log("error en todos generos");
        res.status(404).end(error.message);
    }
};

const posAllGenres = async (req, res) => {
    try {
        const resgenres = await axios.get(`${API_HOST}genres${API_KEY}`);
        //https://api.rawg.io/api/genres?key=acc49da0dff640f49f473caf09c4e88d
        const newDtaGenres = resgenres.data.results;
        // console.log(newDtaGenres.map((gen) => { return (gen.name + gen.id ) }));
        // console.log(newDtaGenres);
        
        let datagenres = newDtaGenres.map((gen) => {
            let newdgenres = {
                id: gen.id,
                name: gen.name
            }
            return newdgenres;
        })
        console.log(datagenres);
        const resultGenres = await Genre.create(datagenres);
        res.status(200).end("Genre creado correctamente").json(resultGenres)
        
        // }
    } catch (error) {
        console.log("no se obtienen generos")
        res.status(404).end(error.message)
    }
}
module.exports = {
    getAllGenres,
    posAllGenres,
};