import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

class Header extends React.Component {
  state = {
    background:
      "https://images.unsplash.com/photo-1568518988484-a4cd9667bd80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  };

  render() {
    return (
      <div
        className="valign-wrapper"
        style={{
          minHeight: "93vh",
          backgroundImage: "url(" + this.state.background + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="row" style={{ marginLeft: "100px" }}>
          <div className="col s12 m6">
            <div className="card  card-panel hoverable">
              <div className="card-content white-text">
                <span className="card-title blue-text text-darken-2">
                  Welcome to Feedbacker!
                </span>
                <p className="blue-text text-darken-2">
                  Give feedback to your company or use our cloud app to increase
                  productivity within your company!
                </p>
              </div>
              <div className="card-action">
                <LoginButton authData={this.props.auth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
