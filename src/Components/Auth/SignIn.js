import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../Redux/actions/authActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = ({ signIn, authError, auth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field center">
          <button className="btn teal lighten-2 btn-large">Login</button>
        </div>
        <div>
          <h6>Don&#39;t have an account? Register now!</h6>
          <Link to="/signup" className="btn indigo darken-4" role="button">
            Join
          </Link>
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(SignIn);
