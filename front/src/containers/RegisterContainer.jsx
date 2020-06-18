import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerUser } from '../redux/action-creators/users';

class RegisterContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            nameInput: '',
            emailInput: '',
            passwordInput: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(event){
        const value = event.target.value
        this.setState({nameInput: value})
    }

    handleEmailChange(event){
        const value = event.target.value
        this.setState({emailInput: value})
    }

    handlePasswordChange(event){
        const value = event.target.value
        this.setState({passwordInput: value})
    }

    handleSubmit(){
        const { nameInput, emailInput, passwordInput } = this.state
        event.preventDefault()
        this.props.registerUser(nameInput, emailInput, passwordInput)
        this.props.history.push('/login')
    }

    render(){
        return(
            <div>
                <Register 
                handleNameChange={this.handleNameChange}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
        
}

const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (name, email, password) => {dispatch(registerUser(name, email, password))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);