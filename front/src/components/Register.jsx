import React from "react";

const Register = () => {
  return (
      <div className="container-fluid" style={{'maxWidth': '40%', 'marginTop': '20px'}}>
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            />
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            />
        </div>
            <button type="submit" className="btn btn-success" style={{display:'flex', justifyContent: 'center'}}>
            Register
            </button>
        </form>
    </div>
  );
};

export default Register;
