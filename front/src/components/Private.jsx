import React from 'react'; 

const Private = ({ user, handleClick }) => {
    return (
        <div>
            {user.name ? (<h1> Private view of {user.name}</h1>) : (<p>'Not allowed'</p>)}
            <button onClick={handleClick} type="submit" className="btn btn-success">LogOut</button>
        </div>
    )
}

export default Private;