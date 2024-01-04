import React from "react";

function Register() {
  return (
    <div>
      <form className="form form-center round-edges">
        <div className="register-form">
          <div class="input-group form-floating mb-3">
            <input type="text" class="form-control" id="floatingUsername" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            <label for="floatingUsername">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-check d-flex center">
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
            <label class="form-check-label" for="form2Example3">
              I agree all statements in <a href="#!">Terms of service</a>
            </label>
          </div>
          <input className="btn btn-primary center" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Register;