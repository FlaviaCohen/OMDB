import { ADD_USER, SET_USER, RESET_USER } from '../constants';
import axios from 'axios';

const newUser = (user)=> {
    return {
        type: ADD_USER,
        user,
    }
}

const loginUser = (user) => {
    return {
        type: SET_USER,
        user,
    }
}

const logoutUser = () => {
    return {
        type: RESET_USER,
        user: {}
    }
}

export const registerUser = (name, email, password) => dispatch => 
axios.post('/api/users/register', {name, email, password})
.then(res => res.data)
.then(user => dispatch(newUser(user)))

export const fetchUser = (email, password) => (dispatch) =>
    axios.post('/api/users/login', {email, password}) 
    .then(res => res.data)
    .then(user => dispatch(loginUser(user)))

export const checkUser = () => dispatch =>
    axios.get('/api/users/me')
    .then(res => res.data)
    .then((user) => {
        return dispatch(loginUser(user))
    })

export const resetUser = () => dispatch =>
    axios.post('/api/users/logout')
    .then(dispatch(logoutUser()))
