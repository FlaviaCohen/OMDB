import React from 'react'; 
import { connect } from 'react-redux';
import SingleMovie from '../components/SingleMovie';
import { fetchMovie } from '../redux/action-creators/movies';
import { addToFavs } from '../redux/action-creators/favs';

class SingleMovieContainer extends React.Component {
    constructor(props){
        super(props)
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.addToFavs(this.props.movie.Title, this.props.movie.Poster, this.props.user.id)
    }
    
    componentDidMount(){
        this.props.fetchMovie(this.props.id)
    } // porque lo que dispara fetchMovie es el ingreso a la url

    render(){
        const { movie, user } = this.props
        return(
            <div>
                <SingleMovie 
                movie={movie}
                user={user}
                handleClick={this.handleClick}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        movie: state.moviesReducer.movie,
        user: state.usersReducer.loggedUser.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (id) => {dispatch(fetchMovie(id))}, // No se ejecuta inmediatamente sino que está lista para ejecutar
        addToFavs: (title, poster, user) => {dispatch(addToFavs(title, poster, user))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer)