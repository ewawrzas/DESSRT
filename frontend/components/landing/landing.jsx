import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../footer'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demoLogin(this.props.demoUser);
    this.setState({username: "", password: ""})
  }

  render () {
    return (
      <div className="landing">

        <div className="landingContent">
          <header className="landingNavBar">
            <ul id="landingLinks">
              <li id="landingSignUp"><Link to="/signup">CREATE AN ACCOUNT</Link></li>
              <li id="landingSignIn"><Link to="/login">{'SIGN IN'}</Link></li>
              <li id="landingSignIn"><button onClick={this.handleDemo}>Demo</button></li>
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



export default (LandingPage);
