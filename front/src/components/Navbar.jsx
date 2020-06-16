import React from 'react';

const Navbar = ({handleChange, handleSubmit, inputValue})=> (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">OMDB</a>
            <form onSubmit={handleSubmit} className="form-inline">
                <input onChange={handleChange} value={inputValue} className="form-control mr-sm-2" type='text' placeholder='Search'/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
)

export default Navbar; 
    