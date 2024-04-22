import React from "react";
import login from "../services/login-service";
import "./styles/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.submit = this.submit.bind(this);
  }

  submit(data) {
    data.preventDefault();
    login(this.state);
  }

  render() {
    return (
      <div id="body">
        <div className="form-container">
          <form
            className="form form-center round-edges"
            action="/"
            method="POST"
            onSubmit={this.submit}
          >
            <div className="login-form">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(data) =>
                    this.setState({ email: data.target.value })
                  }
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(data) =>
                    this.setState({ password: data.target.value })
                  }
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <input
                className="login-button btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

  


export default Login;