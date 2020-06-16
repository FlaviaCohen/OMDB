import { SET_MOVIES, SET_MOVIE } from '../constants';
import axios from 'axios';

const setMovies = (movies)=>{
    return {
        type: SET_MOVIES,
        movies,
    }
}

const setMovie = (movie)=>{
    return {
        type: SET_MOVIE,
        movie,
    }
}

export const fetchMovies = (title) => dispatch => 
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${title}`)
    .then(res => res.data)
    .then(movies => dispatch(setMovies(movies.Search)))
    
export const fetchMovie = (id) => dispatch => 
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(setMovie(movie)))