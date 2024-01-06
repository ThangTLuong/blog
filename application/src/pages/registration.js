import React from "react";
import { registration } from "../services/registration-service";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    };
    this.submit = this.submit.bind(this);
  }

  submit(data) {
    data.preventDefault();
    registration(this.state);
  }

  render() {
    return (
      <div>
        <form className="form form-center round-edges" action="/login" method="POST" onSubmit={this.submit}>
          <div className="register-form">
            <div className="input-group form-floating mb-3">
              <input type="text" className="form-control" id="floatingUsername" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
              onChange={(data) => this.setState({username: data.target.value})}/>
              <label htmlFor="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
              onChange={(data) => this.setState({email: data.target.value})}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
              onChange={(data) => this.setState({password: data.target.value})} />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingRePassword" placeholder="Re-Password" 
              onChange={(data) => this.setState({rePassword: data.target.value})} />
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