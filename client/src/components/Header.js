import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue lighten-3  ">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
            <i className="material-icons">cloud</i>
            Feedbacker
          </Link>
          <ul className="right hide-on-med-and-down"><LoginButton authData={this.props.auth} /></ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
