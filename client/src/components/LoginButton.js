import React from "react";

function LoginButton(authData) {
  switch (authData) {
    case null:
      return;
    case false:
      return (
          <a href="auth/google" className="waves-effect indigo lighten-2 btn">
            <i className="material-icons left">laptop</i>
            Sign in with Google
          </a>
      );
    default:
      return (
          <a href="/api/logout" className="waves-effect indigo lighten-2 btn">
            <i className="material-icons left">laptop</i>
            Logout
          </a>
      );
  }
}

export default LoginButton;