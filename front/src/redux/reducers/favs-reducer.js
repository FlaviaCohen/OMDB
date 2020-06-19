import { GET_FAVS } from '../constants';

const initialState = {
    favs: []
}

const favsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FAVS: 
            return {
                favs: [...state.favs, action.favs]
            }
        default:
            return state;
        }
}

export default favsReducer; 