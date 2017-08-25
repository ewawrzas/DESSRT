import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing'
import UpdateFormContainer from './profile/update_form_container';


const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
      <ProtectedRoute path="/home" exact component={GreetingContainer} />
      <Route path="/home/update" component={UpdateFormContainer} />
      <Route path="/" exact component={LandingPage} />
    </Switch>
  </div>
);

export default App;
