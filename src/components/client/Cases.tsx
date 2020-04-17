import React, { useState, useEffect } from 'react';

import '../../assets/styles/cases.scss';

import casesApi from '../../services/casesApi';

function Cases() {
  const [cases, setCases] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    casesApi
      .getCases()
      .then((res) => {
        setCases(res.cases);
        setRecovered(res.recovered);
        setDeaths(res.deaths);
      })
      .catch((error) => console.log(error));
    return () => {
      //   cleanup
    };
  }, []);

  return (
    <div className="Cases">
      <h1>Cases</h1>
      <div className="Cases-container">
        <div className="Case-item">
          <div>{cases}</div>
          <div>Confirmed</div>
        </div>
        <div className="Case-item">
          <div>{recovered}</div>
          <div>Recovered</div>
        </div>
        <div className="Case-item">
          <div>{deaths}</div>
          <div>Deaths</div>
        </div>
      </div>
    </div>
  );
}

export default Cases;
