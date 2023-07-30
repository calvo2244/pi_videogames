import {
  GET_ALL_VIDEOGAMES,
  GET_ID_VIDEOGAME,
  GET_NAME_VIDEOGAME,
} from "./actionType";

const initialState = {
  videogamesOriginState: [],
  videogamesState: [],
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

    default:
      return { ...state };
  }
}
