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

const initialState = {
  videogamesOriginState: [],
  videogamesHomeState: [],
  videogamesDetailState: [],
  videogamesState: [],
  genresState: [],
  numPageState: 1,
  filterNameState: [],
  filterRatingState: [],
  filterGenreState: [],
  filterOriginState: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogamesOriginState: payload,
        videogamesHomeState: payload,
        videogamesState: payload

      }

    case GET_ID_VIDEOGAME:
      return {
        ...state,
        videogamesDetailState: payload
      }

    case POST_NEW_VIDEOGAME:
      return {
        ...state,//trae todo el estado
        videogamesState: [...state.videogamesState, payload],
        videogamesOriginState: [...state.videogamesOriginState, payload],
        videogamesHomeState: [...state.videogamesOriginState, payload],
      }
    case SEARCH_VIDEOGAME:
      return {
        ...state,
        videogamesHomeState: payload
      }
    case PREV:
      return {
        ...state,
        numPageState: state.numPageState - 1
      }
    case NEXT:
      return {
        ...state,
        numPageState: state.numPageState + 1
      }
    case POST_ALL_GENRES:
      return {
        ...state
      }
    case GET_ALL_GENRES:
      return {
        ...state,
        genresState: payload
      }
    case FILTER_NAME:
      let sortByName = [];
      if (payload === 'ascending') {
        sortByName = [...state.videogamesHomeState].sort((a, b) => a.name.localeCompare(b.name));
      }

      if (payload === 'descending') {
        sortByName = [...state.videogamesHomeState].sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filterNameState: sortByName,
        videogamesHomeState: sortByName
      }
    case FILTER_RATING:
      let sortByRating = [];
      if (payload === 'ascending') {
        sortByRating = [...state.videogamesHomeState].sort((a, b) => a.rating - b.rating);
      }

      if (payload === 'descending') {
        sortByRating = [...state.videogamesHomeState].sort((a, b) => b.rating - a.rating);
      }
      return {
        ...state,
        filterRatingState: sortByRating,
        videogamesHomeState: sortByRating
      }
    case FILTER_GENRE:
      const stateData = [...state.videogamesHomeState]
      alert(typeof(stateData));
      console.log("filtergenre--   ",payload," :::::::::  ",stateData);
      // const gamesGenres = payload === "all" ? stateData
      const gamesGenres =  stateData.filter(game=>{
        const gam=game.genres.name
        console.log("<<<<<<<<",gam);
        return gam

      })
      console.log(">>>>>>>>>",gamesGenres);
      return {
        ...state,
        // filterGenreState: gamesGenres,
        // videogamesHomeState: gamesGenres,
      }
    case FILTER_ORIGIN:
      return {
        ...state,
        filterOriginState: payload,
        videogamesHomeState: payload,
      }





    case FILTER_RESET:
      return {
        ...state,
        filterNameState: [],
        videogamesHomeState: state.videogamesOriginState,
        filterRatingState: [],
        filterGenreState: [],
        numPageState:1
      }
    default:
      return { ...state };
  }
}
