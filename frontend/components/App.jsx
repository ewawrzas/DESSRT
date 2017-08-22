import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>DESSRT</h1>
      <h4>EAT SOCIALLY</h4>
      <GreetingContainer/>
    </header>

    <AuthRoute path="/login" component={AuthFormContainer} />
    <AuthRoute path="/signup" component={AuthFormContainer} />
  </div>
);

export default App;
