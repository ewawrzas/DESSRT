import React from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    if (!this.props.hideNav) {
      return (
        <div>
          <header className="navBar">
            <div>
              <h1>DESSRT</h1>
              <h4>EAT SOCIALLY</h4>
            </div>
              <ul id="navLinks">
                <li id="navSignUp"><Link to="/signup">CREATE AN ACCOUNT</Link></li>
                <li id="navSignIn"><Link to="/login">{'SIGN IN'}</Link></li>
              </ul>
          </header>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default LandingPage;
