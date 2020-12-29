import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SingIn';
import Movies from '../pages/Movies';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/movies" component={Movies} isPrivate />
  </Switch>
);

export default Routes;
