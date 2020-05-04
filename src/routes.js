import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './Home';
import Donations from './components/client/donations/Donations';
import CoronaFAQs from './components/client/CoronaFAQs';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import history from './utils/history';

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default routes;
