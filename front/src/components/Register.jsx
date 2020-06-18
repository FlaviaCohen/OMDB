import React from "react";

const Register = ({ handleNameChange, handleEmailChange, handlePasswordChange, handleSubmit }) => {
  return (
      <div className="container-fluid" style={{'maxWidth': '40%', 'marginTop': '20px'}}>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input onChange={handleNameChange}
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter your Name or Nickname"
            />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input onChange={handleEmailChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input onChange={handlePasswordChange}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            />
        </div>
            <button type="submit" className="btn btn-success" style={{display:'flex', justifyContent: 'center'}}>Register</button>
        </form>
    </div>
  );
};

export default Register;
