import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import LandingPage from './landing/landing'
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <LandingPage/>
    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
      // <Route path="/home" component={LandingPage} />
      <Route path="/" exact component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
