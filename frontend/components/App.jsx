import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import AuthFormContainer from './authform/auth_form_container'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <header>
      <h1>DESSRT</h1>
      <GreetingContainer/>
    </header>

    <Route path="/login" component={AuthFormContainer} />
    <Route path="/signup" component={AuthFormContainer} />
  </div>
);

export default App;
