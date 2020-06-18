import React from 'react'
import { Link } from 'react-router-dom';

const Movies = ({ filteredMovies })=> {
    return (
        <div>
            <div style={{display:'flex', flexDirection:"row", flexWrap:'wrap', margin:'10px', justifyContent: 'center'}}>
            {filteredMovies.length ? filteredMovies.map(movie => {
                return (
                    <div key={movie.imdbID} className="card" style={{width:'20%', margin: '1%'}}>
                        <Link to={`/movies/${movie.imdbID}`}>
                        <img src={movie.Poster} className="card-img-top" alt="..." style={{width:'100%'}}/>
                        </Link>
                        <div className="card-body">
                        <p className="card-text">{movie.Title}</p>
                        </div>
                    </div>
                )
            }) : <h1> OMDB HOME </h1> } 
            </div>
        </div>
    )
}

export default Movies; 