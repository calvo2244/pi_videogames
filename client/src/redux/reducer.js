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
      alert(typeof (stateData));
      console.log("------filtergenre=> ", payload);
      console.log(";;;;typeof=> ", typeof (state));
      console.log("::::state=>  ", stateData);

      let gamesGenres = stateData.filter((game) => {
        let gamegenres = game.genres
        let arraygenres2 = gamegenres && gamegenres.filter(gen => gen.name === "Action")
        console.log(arraygenres2);
        return game
      })

      // // let arraygenres = gamegenres && gamegenres.map(gen => gen.name)
      //   if (gen.name === payload) {
      //     return gen;
      //   }
      // })
      // console.log("*****array genres ", arraygenres2, " ****")


      // return arraygenres2


      // console.log("===========",typeof(game.genres))
      // console.log("*****game",game," ****")
      // return games


      console.log(">>>>>>>>>", gamesGenres);
      return {
        ...state,
        filterGenreState: gamesGenres,
        videogamesHomeState: gamesGenres,
      }

    case FILTER_ORIGIN:
      state.videogamesHomeState = [...state.videogamesOriginState]
      const Datastate = [...state.videogamesHomeState]
      let resultFiter = [];
      console.log(Datastate);
      if (payload === "api") {
        resultFiter = Datastate.filter(game => game.origin === "false")
      }
      if (payload === "db") {
        resultFiter = Datastate.filter(game => game.origin === "true")
      }
      console.log("final----", resultFiter);
      return {
        ...state,
        filterOriginState: resultFiter,
        videogamesHomeState: resultFiter,
      }





    case FILTER_RESET:
      return {
        ...state,
        filterNameState: [],
        videogamesHomeState: state.videogamesOriginState,
        filterRatingState: [],
        filterGenreState: [],
        numPageState: 1
      }

    default: return { ...state };
  }
}
