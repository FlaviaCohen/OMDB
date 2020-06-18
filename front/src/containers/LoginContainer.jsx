import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { fetchUser } from '../redux/action-creators/users';

class LoginContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            emailInput: '',
            passwordInput: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange(event){
        const value = event.target.value
        this.setState({emailInput: value})
    }

    handlePasswordChange(event){
        const value = event.target.value
        this.setState({passwordInput: value})
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.fetchUser(this.state.emailInput, this.state.passwordInput)
        
    }

    render(){
        return(
            <div>
                <Login 
                 handleEmailChange={this.handleEmailChange}
                 handlePasswordChange={this.handlePasswordChange}
                 handleSubmit={this.handleSubmit}
                 />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.usersReducer.loggedUser)
    return {
        user: state.usersReducer.loggedUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: (email, password) => {dispatch(fetchUser(email, password)).then((user => ownProps.history.push(`/users/me`)))
        }
    }    
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);