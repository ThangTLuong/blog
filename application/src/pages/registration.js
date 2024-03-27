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
      agreement: false,
    };
    this.submit = this.submit.bind(this);
  }

  submit(data) {
    data.preventDefault();
    const { username, email, password, rePassword, agreement } = this.state;

    if (!username || !email || password.length < 8 || password !== rePassword || agreement !== true) {
      console.log('Validation failed. Please check your inputs.');
      return;
    }

    if (this.state.strength_points < 4) {
      console.log('Password strength is not sufficient.');
      return;
    }

    registration(this.state);
  }

  passwordStrength(password) {
    const strength = document.getElementById("strength");
    const strengthDiv = document.getElementById("strengthDiv");
    const strengthDivBar = document.getElementById("strengthDivBar");

    let strength_points = 0;

    if (password.length > 0){
      strengthDiv.style.display = "block";
      strengthDivBar.style.display = "block";

      if (/[a-z]/.test(password)) {
        strength_points += 1;
      }
  
      if (/[A-Z]/.test(password)) {
        strength_points += 1;
      }
  
      if (/[0-9]/.test(password)) {
        strength_points += 1;
      }
  
      if (/[$@#&!?%*()-+=/£]/.test(password)) {
        strength_points += 1;
      }
  
      if (strength_points === 0) {
        strength.innerHTML = "Password is very weak";
        strength.style.color = "red";
        strengthDivBar.style.background = "red";
        strengthDivBar.style.visibility = "visible";
        strengthDivBar.style.width = "0%";
      } else if (strength_points === 1) {
        strength.innerHTML = "Password is very weak";
        strength.style.color = "red";
        strengthDivBar.style.background = "red";
        strengthDivBar.style.visibility = "visible";
        strengthDivBar.style.width = "25%";
      } else if (strength_points === 2) {
        strength.innerHTML = "Password is medium strength";
        strength.style.color = "orange";
        strengthDivBar.style.visibility = "visible";
        strengthDivBar.style.background = "orange";
        strengthDivBar.style.width = "50%";
      } else if (strength_points === 3) {
        strength.innerHTML = "Password is strong";
        strength.style.color = "green";
        strengthDivBar.style.visibility = "visible";
        strengthDivBar.style.background = "green";
        strengthDivBar.style.width = "75%";
      } else if (strength_points === 4) {
        strength.innerHTML = "Password is very strong";
        strength.style.color = "green";
        strengthDivBar.style.background = "green";
        strengthDivBar.style.visibility = "visible";
        strengthDivBar.style.width = "100%";
      }
    } else {
      strengthDiv.style.display = "none";
      strengthDivBar.style.display = "none";
    }
  }

  render() {
    return (
      <div>
        <form className="form form-center round-edges" action="/login" method="POST" onSubmit={this.submit}>
          <div className="register-form">
            <div className="input-group form-floating mb-3">
              <input type="text" className="form-control rounded" id="floatingUsername" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
              onChange={(data) => this.setState((prevState) => ({username: data.target.value}))}/>
              <label htmlFor="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
              onChange={(data) => this.setState((prevState) => ({email: data.target.value}))}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
              onChange={(data) => {
                this.passwordStrength(data.target.value);
                this.setState((prevState) => ({password: data.target.value}));
                }} />
              <label htmlFor="floatingPassword">Password</label>
              <div id="strengthDiv" className="text-center text-xs mt-1 font-bold">
                <label id="strength"></label>
              </div>
                <div id="strengthDivBar" className="rounded mt-1 h-2.5"/>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingRePassword" placeholder="Re-Password" 
              onChange={(data) => this.setState((prevState) => ({rePassword: data.target.value}))} />
              <label htmlFor="floatingPassword">Re-type Password</label>
            </div>
            <div className="form-check d-flex center">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" 
              onClick={() => this.setState((prevState) => ({agreement: !prevState.agreement}))}/>
              <label className="form-check-label" htmlFor="form2Example3">
                I agree all statements in <a href="#">Terms of service</a>
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