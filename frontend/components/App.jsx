import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing'
import updateFormContainer from './profile/update_form_container';

const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
      <ProtectedRoute path="/home" component={GreetingContainer} />
      <Route path="/update" component={updateFormContainer} />
      <Route path="/" exact component={LandingPage} />
    </Switch>
  </div>
);

export default App;
