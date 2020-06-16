// el inicio de la app

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app') 
    );

    /* 
    MUST HAVE
    Buscar películas y listarlas.
    Poder ver los detalles de una película en particular.
    Crear Usuarios.
    Loggearse y desloggearse con un usuario. 

    SHOULD HAVE
    Ver Pista
    Poder agregar una película a tu lista de favoritos.
    Ver tu lista de películas favoritas.
    Poder sacar películas de tu lista de favoritos. 

    NICE TO HAVE
    Ver Pista
    Buscar Usuarios.
    Ver el perfil de un usuario con sus películas favoritas. */