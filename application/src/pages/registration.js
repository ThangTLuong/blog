import React from "react";
import { registration } from "../services/registration-service";

class Register extends React.Component {
  render() {
    return (
      <div>
        <form className="form form-center round-edges">
          <div className="register-form">
            <div className="input-group form-floating mb-3">
              <input type="text" className="form-control" id="floatingUsername" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <label htmlFor="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingRePassword" placeholder="" />
              <label htmlFor="floatingPassword">Re-type Password</label>
            </div>
            <div className="form-check d-flex center">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
              <label className="form-check-label" htmlFor="form2Example3">
                I agree all statements in <a href="#!">Terms of service</a>
              </label>
            </div>
            <input className="btn btn-primary center" type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;