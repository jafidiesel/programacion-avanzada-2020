import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from 'pages/welcome/Welcome';
import Campaign from 'pages/campaign/Campaign';

function Router() {
  return (
    <Switch>
      <Route exact path="/campaign/:hash" component={Campaign} />
      <Route exact path="/welcome" component={Welcome} />
    </Switch>
  );
}

export default Router;