import { ADD_USER, SET_USER, RESET_USER } from '../constants';

const initialState = {
    registeredUser: {},
    loggedUser: {}
}

const usersReducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_USER:
            return {...state, registeredUser: action.user}
        case SET_USER: 
            return {...state, loggedUser: action.user}
        case RESET_USER: 
            return {...state, loggedUser: action.user}
        default:
            return state;
    }
}

export default usersReducer;