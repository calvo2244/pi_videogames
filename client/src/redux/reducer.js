import {
  GET_ALL_VIDEOGAMES,
  GET_ID_VIDEOGAME,
  GET_NAME_VIDEOGAME,
  POST_NEW_VIDEOGAME,
  POST_ALL_GENRES,
} from "./actionType";

const initialState = {
  videogamesOriginState: [],
  videogamesState: [],
  genresState: [],
  numPageState: 1,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogamesState: payload,
        videogamesOriginState: payload
      }
    case GET_ID_VIDEOGAME:
      return {
        ...state,
        videogamesState: payload
      }
    case GET_NAME_VIDEOGAME:
      return {
        ...state,
        videogamesState: payload
      }
    case POST_NEW_VIDEOGAME:
      return {
        ...state,//trae todo el estado
        videogamesState: [...state.videogamesState, payload],
        videogamesOriginState: [...state.videogamesOriginState, payload]
      }
    case POST_ALL_GENRES:
      return {
        ...state
      }

    default:
      return { ...state };
  }
}
