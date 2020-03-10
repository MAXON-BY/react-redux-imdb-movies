import {FETCH_MOVIE, FETCH_MOVIES, ISLOADER, SEARCH_MOVIE} from "../actions/types";

const initialState = {
    movies: [],
    isLoader: true,
    text: '',
    movie: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload,
                isLoader: false
            };
        case FETCH_MOVIES:
            return{
                ...state,
                movies: action.payload.Search,
                isLoader: false
            };
        case FETCH_MOVIE:
            return{
                ...state,
                movie: action.payload,
                isLoader: false
            };
        case ISLOADER:
            return{
                ...state,
                isLoader: true,
            };
        default:
            return state
    }
}