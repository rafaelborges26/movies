import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SingIn';
import Movies from '../pages/Movies';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/movies" exact component={Movies} />
  </Switch>
);

export default Routes;
