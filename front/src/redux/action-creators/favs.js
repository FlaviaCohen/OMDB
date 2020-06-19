import { GET_FAVS } from '../constants';
import axios from 'axios'; 

const getFavs = (favs) => {
    return {
        rype: GET_FAVS,
        favs,
    }
}

export const addToFavs = (title, poster, user) => () => 
    axios.post('/api/favs', {title, poster, user})

/* export const getMyFavs = () => dispatch => 
    axios.get('/api/favs')
    .then(res => res.data)
    .then(favs => dispatch(getFavs(favs))) */