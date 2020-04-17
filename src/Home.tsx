import React from 'react';
import Header from './components/shared/Header';
import DateTime from './components/client/DateTime';
import Cases from './components/client/Cases';

function App() {
  return (
    <div>
      <Header />
      <DateTime />
      <Cases/>
    </div>
  );
}

export default App;
