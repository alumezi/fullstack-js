import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="auth/google" className="waves-effect indigo lighten-2 btn">
              <i className="material-icons left">laptop</i>
              Sign in with Google
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout" className="waves-effect indigo lighten-2 btn">
              <i className="material-icons left">laptop</i>
              Logout
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue lighten-3  ">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
            <i className="material-icons">cloud</i>
            Feedbacker
          </Link>
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
