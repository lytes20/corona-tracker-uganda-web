import React from 'react';
import '../../assets/styles/cases.scss'

function Cases() {
  return (
    <div className="Cases">
      <h1>Cases</h1>
      <div className="Cases-container">
        <div className="Case-item">
          <div>54</div>
          <div>Confirmed</div>
        </div>
        <div className="Case-item">
          <div>7</div>
          <div>Recovered</div>
        </div>
        <div className="Case-item">
          <div>0</div>
          <div>Deaths</div>
        </div>
      </div>
    </div>
  );
}

export default Cases;
