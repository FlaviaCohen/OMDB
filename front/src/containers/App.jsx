import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUser } from '../redux/action-creators/users';
import NavbarContainer from '../containers/NavbarContainer';
import MoviesContainer from '../containers/MoviesContainer';
import SingleMovieContainer from '../containers/SingleMovieContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from '../containers/LoginContainer';
import PrivateContainer from '../containers/PrivateContainer';


class App extends React.Component {
  componentDidMount(){
    this.props.checkUser()
  }

  render(){
  return (
    <div id="app">
      <Route path='/' component={NavbarContainer}/>
      <Switch>
        <Route exact path='/movies'component={MoviesContainer} />
        <Route path='/movies/:id' component={SingleMovieContainer}/>
        <Route path='/register' component={RegisterContainer}/>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/users/me' component={PrivateContainer}/>
        <Redirect to='/movies'/>
      </Switch>
    </div>
  )}
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: () => {dispatch(checkUser())}
  }
}

export default connect(null, mapDispatchToProps)(App);
