const axios = require("axios")
const { Genres } = require("../db.js")
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

const postAllGendersBD = async (req, res) => {
    try {
        const genres = await axios.get(`${API_HOST}genres${API_KEY}`);

    } catch (error) {
        console.log("no se obtienen generos")
        res.status(404).end(error.message)
    }
}
module.exports = {
    getAllGenres,
    postAllGendersBD,
};