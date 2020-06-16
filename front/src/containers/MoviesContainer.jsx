import React from 'react'; 
import { connect } from 'react-redux';
import Movies from '../components/Movies';

class MoviesContainer extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const { movies } = this.props // llega desde mapStateToProps
        return(
            <div>
                <Movies 
                filteredMovies={movies}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        movies: state.moviesReducer.movies
    }
}

export default connect(mapStateToProps, null)(MoviesContainer)