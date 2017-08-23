import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import LandingPage from './landing/landing'
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <LandingPage />
    <Switch>
      <Route path="/landing" component={LandingPage} />
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
      <ProtectedRoute path="/" exact component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
