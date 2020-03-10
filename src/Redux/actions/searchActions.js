import {FETCH_MOVIE, FETCH_MOVIES, ISLOADER, SEARCH_MOVIE} from "./types";
import {APIKey} from "../../config/APIKey";
import axios from "axios";

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
};

export const  fetchMovies = text => dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(res => dispatch({
            type: FETCH_MOVIES,
            payload: res.data
        }))
        .catch(error => console.log(error))
};

export const  fetchMovie = id => dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(res => dispatch({
            type: FETCH_MOVIE,
            payload: res.data
        }))
        .catch(error => console.log(error))
};

export const isLoader = () => {
    return {
        type: ISLOADER
    }
};