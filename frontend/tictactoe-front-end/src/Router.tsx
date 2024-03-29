import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Campaign from 'pages/Campaign/Campaign';

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campaign/:hash" component={Campaign} />
        </Switch>
    );
}

export default Router;