import React from 'react';
import Header from './components/shared/Header';
import DateTime from './components/client/DateTime';
import Cases from './components/client/Cases';
import Past14DaysChart from './components/client/Past14DaysChart'

function App() {
  return (
    <div>
      <Header />
      <DateTime />
      <Cases/>
      <Past14DaysChart/>
    </div>
  );
}

export default App;
