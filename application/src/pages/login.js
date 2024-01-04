import React from "react";

function Login() {
  return (
    <div>
      <form className="form form-center round-edges">
        <div className="login-form">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <input className="btn btn-primary center" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;