import React from 'react';

import './assets/styles/home.scss';

import DateTime from './components/client/DateTime';
import Cases from './components/client/Cases';
import Past14DaysChart from './components/client/Past14DaysChart';
import TwitterFeed from './components/client/TwitterFeed';

function App() {
  return (
    <div className="Home-container">
      <div className="Home-main">
        <DateTime />
        <Cases />
        <Past14DaysChart />
      </div>
      <div className="Home-side">
        <TwitterFeed />
      </div>
    </div>
  );
}

export default App;
