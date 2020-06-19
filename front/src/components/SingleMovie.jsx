import React from "react";

const SingleMovie = ({ movie, user, handleClick }) => {
  return (
    <div className="container-fluid" style={{'maxWidth': '80%'}}>
      <div className="card mb-3" style={{'marginTop': '20px'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={movie.Poster} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.Title} - {movie.Rated}</h5>
              <small className="text-muted">Director: {movie.Director}</small><br></br>
              <p className="card-text">{movie.Plot}</p>
              <small className="text-muted"></small>
              <small className="text-muted">Year: {movie.Year}</small><br></br>
              <small className="text-muted">Genre: {movie.Genre}</small><br></br><br></br>
              <small>
              <p className="card-text">Ratings: </p>
                <ul>
                    {movie.Ratings ? movie.Ratings.map(objeto => {
                        return (
                        <li key={objeto.Value}>{objeto.Source} : {objeto.Value}</li>
                        )
                    }) : null}
                        <li>IMDB: {movie.imdbRating}</li>
                </ul>
              </small>
              {user ? <button className="btn btn-danger" onClick={handleClick}>Add to Favorites</button> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
