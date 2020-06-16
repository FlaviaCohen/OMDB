import { SET_MOVIES, SET_MOVIE } from '../constants';

const initialState = { 
    movies: [],
    movie: {}
}

const moviesReducer = (state = initialState, action)=> {
    switch(action.type){
        case SET_MOVIES:
            return {...state, movies: action.movies}
        case SET_MOVIE: 
            return {...state, movie: action.movie}
        default:
            return state;
    }
}

export default moviesReducer;