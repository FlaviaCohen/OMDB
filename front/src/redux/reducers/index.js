import { combineReducers } from 'redux';
import moviesReducer from './moovies-reducer';

export default combineReducers({
    moviesReducer, // moviesReducer: moviesReducer
})