import React from 'react'; 
import { connect } from 'react-redux';
import SingleMovie from '../components/SingleMovie';
import { fetchMovie } from '../redux/action-creators/movies';

class SingleMovieContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchMovie(this.props.id)
    } // porque lo que dispara fetchMovie es el ingreso a la url

    render(){
        const { movie } = this.props
        return(
            <div>
                <SingleMovie 
                movie={movie}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        movie: state.moviesReducer.movie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (id) => {dispatch(fetchMovie(id))} // No se ejecuta inmediatamente sino que está lista para ejecutar
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer)