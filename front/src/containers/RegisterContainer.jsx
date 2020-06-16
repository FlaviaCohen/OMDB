import React from 'react';
import { connect } from 'react-router-dom'
import Register from '../components/Register'

class RegisterContainer extends React.Component {

    render(){
        return(
            <div>
                <Register />
            </div>
        )
    }
        
}

export default RegisterContainer;