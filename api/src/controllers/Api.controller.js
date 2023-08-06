const axios = require("axios");
const { API_HOST, API_KEY } = process.env;


const getAllVideogamesAPI = async () => {
    let apiGames = [];
    try {
        let numPage = 1;// let para modificar
        while (apiGames.length < 100) {
            const resApiGame = await axios.get(`${API_HOST}games${API_KEY}&page_size=25&page=${numPage}`);
            const resApiGameData = resApiGame.data.results;
            //  console.log(resApiGameData);
            resApiGameData.forEach((game) => {
                apiGames.push({
                    id: game.id,
                    name: game.name,
                    platforms: game.platforms.map((plat) => plat.platform.name),
                    image: game.background_image,
                    released: game.released,
                    rating: game.rating,
                    genres: game.genres
                })
            })
            numPage++
        }
        console.log({ msg: "succes: Get Videogames in Api en getAllVideogamesAPI" })
        // return res.status(200).json(apiGames)
        return apiGames
    } catch (error) {
        return console.log({ msg: "error: Get Videogames in Api en getAllVideogamesAPI" });
    }
}
const getAllVideogamesApiID = async (params) => {
    try {
        const resVideogame = await axios.get(`${API_HOST}games/${params}${API_KEY}`);
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
        console.log({ msg: "succes: Get Videogames in Api en getAllVideogamesApiID" })
        return (newvidgameId);
    } catch (error) {
        return console.log({ msg: "error: Get Videogames in Api en getAllVideogamesApiID" });
    }
};

module.exports = {
    getAllVideogamesAPI,
    getAllVideogamesApiID
};