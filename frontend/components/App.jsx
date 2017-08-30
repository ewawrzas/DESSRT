import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AuthFormContainer from './authform/auth_form_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing'
import UpdateFormContainer from './profile/update_form_container';
import UserProfileContainer from './profile/user_profile_container';
import DessertIndexContainer from './desserts/dessert_index_container';
import DessertProfileContainer from './desserts/dessert_profile_container';
import DessertFormContainer from './desserts/dessert_form_container';

const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
      <ProtectedRoute path="/home" exact component={GreetingContainer} />
      <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
      <ProtectedRoute path="/account" component={UpdateFormContainer} />
      <ProtectedRoute path="/desserts/:dessertId" component={DessertProfileContainer} />
      <ProtectedRoute path="/desserts" exact component={DessertFormContainer} />
      <Route path="/" exact component={LandingPage} />
    </Switch>
  </div>
);

export default App;
