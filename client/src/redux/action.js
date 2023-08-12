import {
    GET_ALL_VIDEOGAMES,
    GET_ID_VIDEOGAME,
    POST_NEW_VIDEOGAME,
    POST_ALL_GENRES,
    SEARCH_VIDEOGAME,
    PREV,
    NEXT,
    GET_ALL_GENRES,
    FILTER_NAME,
    FILTER_RATING,
    FILTER_RESET,
    FILTER_GENRE,
    FILTER_ORIGIN,
} from "./actionType";
import axios from 'axios'


export const getAllVideogames = () => {
    return async function (dispatch) {
        const apidata = await axios.get("http://localhost:3001/videogames");
        const videogames = apidata.data;
        dispatch({
            type: GET_ALL_VIDEOGAMES,
            payload: videogames,
        });
    };
};

export const getIdVideogame = (id) => {
    return async function (dispatch) {
        try {
            const apidata = await axios.get(`http://localhost:3001/videogames/${id}`);
            const videogame = apidata.data;
            dispatch({
                type: GET_ID_VIDEOGAME,
                payload: videogame,
            });
        }
        catch (error) {
            console.log(error);
        }
    };
};
export const getNameVideogame = (name) => {
    // return async function (dispatch) {
    //     const apidata = await axios.get(``);
    //     const videogame = apidata.data.results;
    //     dispatch({
    //         type: GET_NAME_VIDEOGAME,
    //         payload: videogame
    //     });
    // };
};

export const createVideoGame = (form) => {
    return async function (dispatch) {
        await axios.post(`http://localhost:3001/videogames`, form)
        dispatch({
            type: POST_NEW_VIDEOGAME,
            payload: form,
        })
    }
};

export const createGenresBd = () => {
    return async function (dispatch) {
        await axios.post('http://localhost:3001/genres')
        dispatch({
            type: POST_ALL_GENRES,
        })
    }
};
export const getAllGenresBd = () => {
    return async function (dispatch) {
        const getAllGenresBd = await axios.get('http://localhost:3001/genres')
        console.log("estamos probando aqui", getAllGenresBd);
        dispatch({
            type: GET_ALL_GENRES,
            payload: getAllGenresBd,
        })
    }

};

export const searchVideogame = (value) => {
    return async function (dispatch) {
        try {
            // console.log("::::::", value);
            if (value  === "") {
                return alert(`debe ingresar datos al Search`)
            }
            const searchVideogame = await axios.get(`http://localhost:3001/videogames/name?name=${value}`)
            const searchData = searchVideogame.data;
            console.log(searchData);
            if (searchData.length === 0) {
                return alert(`Not found VideoGames ${value}`)
            }
           
            dispatch({
                type: SEARCH_VIDEOGAME,
                payload: searchData,
            })

        } catch (error) {
            console.error("No se pueden obtener los Videogames ")
        }
    }
}

export const prev = () => {
    return {
        type: PREV
    }
}
export const next = () => {
    return {
        type: NEXT
    }
}


export const filterByName = (value) => {
    return {
        type: FILTER_NAME,
        payload: value,
    }
}
export const filterByRating = (value) => {
    return {
        type: FILTER_RATING,
        payload: value,
    }
}
export const filterByGenre = (value) => {
    return {
        type: FILTER_GENRE,
        payload: value,
    }
}
export const filterByOrigin = (value) => {
    return {
        type: FILTER_ORIGIN,
        payload: value,
    }
}
export const filterReset = () => {
    return {
        type: FILTER_RESET,
    }
}