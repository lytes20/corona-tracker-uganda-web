import React from 'react';

import './assets/styles/home.scss';

import Header from './components/shared/Header';
import DateTime from './components/client/DateTime';
import Cases from './components/client/Cases';
import Past14DaysChart from './components/client/Past14DaysChart';

function App() {
  return (
    <div className="Home-container">
      <div className="Home-main">
        <DateTime />
        <Cases />
        <Past14DaysChart />
      </div>
      <div className="Home-side"></div>
    </div>
  );
}

export default App;
