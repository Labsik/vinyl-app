import React, { useState } from "react";

import { connect } from "react-redux";
import { signUp } from "../../Redux/actions/authActions";

import { Redirect } from "react-router-dom";

const SignUp = ({ signUp, auth, authError }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { email, password, firstName, lastName } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      firstName,
      lastName,
    };

    signUp(newUser);
  };

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            required
            minLength="2"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            required
            minLength="2"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button className="btn  teal lighten-2">Sign Up</button>
        </div>
        <div className="red-text center">
          {authError ? <h3> {authError} </h3> : null}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
