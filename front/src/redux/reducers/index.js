import { combineReducers } from 'redux';
import moviesReducer from './moovies-reducer';
import usersReducer from './users-reducer'

export default combineReducers({
    moviesReducer, // moviesReducer: moviesReducer
    usersReducer,
})