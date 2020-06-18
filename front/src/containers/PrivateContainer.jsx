import React from 'react'; 
import { connect } from 'react-redux';
import Private from '../components/Private'; 
import { resetUser } from '../redux/action-creators/users';

class PrivateContainer extends React.Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.resetUser();
        this.props.history.push('/movies')
    }

    render(){
        const { user } = this.props
        return (
            <div>
                <Private 
                user={user}
                handleClick={this.handleClick}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.loggedUser.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetUser: () => dispatch(resetUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateContainer)