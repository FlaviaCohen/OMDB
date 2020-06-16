import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchMovies } from '../redux/action-creators/movies';
import Movies from '../components/Movies';

class NavbarContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({inputValue: value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.fetchMovies(this.state.inputValue)
        /* history.push('/movies') */
    }
    
    render(){
        const { inputValue } = this.state
        return(
            <div>
                <Navbar
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                inputValue={inputValue}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchMovies: (title)=>{dispatch(fetchMovies(title))}
    }
}

export default connect(null, mapDispatchToProps)(NavbarContainer);