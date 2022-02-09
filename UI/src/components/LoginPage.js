import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import NavBar from "./NavBar";
// import user_icon from "../images/user_icon.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({ input });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["password"] = "";

      this.setState({ input: input });

      // alert("Form is Submitted!");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter username";
    }
    if (typeof input["username"] !== undefined) {
      const re = /^\S*$/;
      if (input["username"].length < 6 || !re.test(input["username"])) {
        isValid = false;
        errors["username"] = "Please enter valid username";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({ errors: errors });
    return isValid;
  }

  render() {
    return (
      <div>
        <NavBar />
        <form className="main" onSubmit={this.handleSubmit}>
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <FcBusinessman size={125} />
                </div>
              </div>
              <div>
                <h1 className="mt-4 heading">Login</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="name input-class"
                    name="user-name"
                    value={this.state.input.username}
                    onChange={this.handleChange}
                    required
                  />
                  <div className="text-danger">
                    {this.state.errors.username}
                  </div>
                </div>
                <div>
                  <select>
                    {/* <option>User Type</option> */}
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="name input-class"
                    name="password"
                    value={this.state.input.password}
                    onChange={this.handleChange}
                    required
                  />
                  <div className="text-danger">
                    {this.state.errors.password}
                  </div>
                </div>

                <div>
                  <button type="submit" value="Login" className="btn  w-50">
                    <Link to="/user/dashboard" className="text-white link">
                      Login
                    </Link>
                  </button>
                </div>

                <div className="link mt-2">
                  <Link to="/forgotpassword">Forgot Password</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
