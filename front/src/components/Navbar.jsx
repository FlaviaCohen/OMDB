import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({handleChange, handleSubmit, inputValue, user})=> (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            {
                user.user ? 
                <Link to={'/users/me'}>
                    <a className="navbar-brand">{('Welcome ' + user.user.name)}</a>
                </Link> : 
                <Link to={'/'}>
                    <a className="navbar-brand">OMDB</a>
                </Link>
            }
            <Link to={'/register'}>
                <a className="navbar-brand">REGISTER</a>
            </Link>
            <Link to={'/login'}>
                <a className="navbar-brand">LOGIN</a>
            </Link>
            <form onSubmit={handleSubmit} className="form-inline">
                <input onChange={handleChange} value={inputValue} className="form-control mr-sm-2" type='text' placeholder='Enter Movie'/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
)

export default Navbar; 
    