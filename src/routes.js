import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Donations from './components/client/donations/Donations';
import CoronaFAQs from './components/client/CoronaFAQs';
import Header from './components/shared/Header';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donations" exact component={Donations} />
          <Route path="/corona-faqs" exact component={CoronaFAQs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;
