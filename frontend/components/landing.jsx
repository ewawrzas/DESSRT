import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {

  render () {
    return (
      <div className="landing">

        <div className="landingContent">
          <header className="landingNavBar">
            <ul id="landingLinks">
              <li id="landingSignUp"><Link to="/signup">CREATE AN ACCOUNT</Link></li>
              <li id="landingSignIn"><Link to="/login">{'SIGN IN'}</Link></li>
            </ul>
          </header>
          <div className="logo">
            <h1>DESSRT</h1>
            <h4 id="sloganLanding">EAT SOCIALLY</h4>
            <p id="landingCopy">Discover and share your favorite desserts</p>
          </div>
        </div>

      </div>
    );
  }
}



export default LandingPage;
