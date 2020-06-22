import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from 'pages/welcome/Welcome';
import Campaign from 'pages/campaign/Campaign';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/campaign/:hash" component={Campaign} />
    </Switch>
  );
}

export default Router;