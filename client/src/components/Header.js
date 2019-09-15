import React from 'react';

class Header extends React.Component {

    render() {
        return <nav>
            <div className="nav-wrapper blue lighten-3  ">
                <a href="/" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="auth/google" className="waves-effect indigo lighten-2 btn">
                            <i className="material-icons left">laptop</i>
                            Login with Google
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}

export default Header;