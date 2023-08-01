import {
    GET_ALL_VIDEOGAMES,
    GET_ID_VIDEOGAME,
    GET_NAME_VIDEOGAME,
    POST_NEW_VIDEOGAME,
    POST_ALL_GENRES,
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
        const apidata = await axios.get(`http://localhost:3001/videogames/${id}`);
        const videogame = apidata.data;
        dispatch({
            type: GET_ID_VIDEOGAME,
            payload: videogame,
        });
    };
};
export const getNameVideogame = (name) => {
    return async function (dispatch) {
        const apidata = await axios.get(``);
        const videogame = apidata.data.results;
        dispatch({
            type: GET_NAME_VIDEOGAME,
            payload: videogame
        });
    };
};

export const createVideoGame = (form) => {
    return async function (dispatch) {
        axios.post(`http://localhost:3001/videogames`, form)
        dispatch({
            type: POST_NEW_VIDEOGAME,
            payload: form,
        })
    }
};

export const createGenresBd = () => {
    return async function (dispatch) {
        axios.post('http://localhost:3001/genres')
        dispatch({
            type: POST_ALL_GENRES,
        })
    }
};