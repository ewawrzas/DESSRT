import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="navBar">
      <div>
        <h1>DESSRT</h1>
        <h4>EAT SOCIALLY</h4>
      </div>
        <ul id="navLinks">
          <li id="navSignUp"><Link to="/signup">CREATE AN ACCOUNT</Link></li>
          <li id="navSignIn"><Link to="/login">SIGNIN</Link></li>
        </ul>
    </header>
    <Switch>
      <Route path="/greeting" component={GreetingContainer} />
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
    </Switch>
  </div>
);

export default App;
