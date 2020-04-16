import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cases from './components/client/Cases';
import Home from './Home';
const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cases" exact component={Cases} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;
