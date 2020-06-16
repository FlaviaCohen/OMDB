import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import NavbarContainer from '../containers/NavbarContainer';
import MoviesContainer from '../containers/MoviesContainer';
import SingleMovieContainer from '../containers/SingleMovieContainer';
import RegisterContainer from '../containers/RegisterContainer';

const App = () => {
  return (
    <div id="app">
    <NavbarContainer />
      <Switch>
        <Route exact path='/movies'component={MoviesContainer} />
        <Route path='/movies/:id' component={SingleMovieContainer}/>
        <Route path='/register' component={RegisterContainer}/>
        <Redirect to='/movies'/>
      </Switch>
    </div>
  );
};

export default App;
