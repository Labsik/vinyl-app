import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../Redux/actions/authActions";

const SignedIn = (props) => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
        <li style={{ paddingLeft: "30px" }}>
          Hello <strong>{props.profile.firstName}</strong>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedIn);
