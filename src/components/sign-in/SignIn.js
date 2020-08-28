import React from "react";
import Joi from "joi-browser";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

import Form from "../../ui/form-components/form";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase/googleAuth";
import { signInWithFacebook } from "../firebase/facebookAuth";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="sign__In col-lg-5 col-md-6 col-11 align-self-center my-5">
        <div className="card ">
          <div className="card-body">
            <h1>Sign in</h1>
            <form onSubmit={this.handleSubmit}>
              <Link
                to="/sign_in"
                onClick={signInWithFacebook}
                className="btn btn-block facebook__btn"
              >
                <FaFacebookF /> Sign in with facebook
              </Link>
              <Link
                to="/sign_in"
                onClick={signInWithGoogle}
                className="btn btn-block google__btn"
              >
                <FaGoogle /> Sign in with google
              </Link>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Sign In")}
            </form>
          </div>
        </div>
        <p className="text-center my-4">
          Don't have account? <Link to="/sign_up">Sign up</Link>
        </p>
      </div>
    );
  }
}

export default LoginForm;
