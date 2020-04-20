import React, { useState, useEffect } from 'react';

import '../../assets/styles/cases.scss';

import Loader from '../shared/Loader';
import casesApi from '../../services/casesApi';

function Cases() {
  const [cases, setCases] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    casesApi
      .getCases()
      .then((res) => {
        setCases(res.cases);
        setRecovered(res.recovered);
        setDeaths(res.deaths);
        setLoading(false);
      })
      .catch((error) => setError(error));
    return () => {
      //   cleanup
    };
  }, []);

  return (
    <div className="Cases">
      <h1>Cases</h1>
      {error ? (
        <div>
          <span className="Error">Can not display cases now</span>
        </div>
      ) : (
        <div className="Cases-container">
          <div className="Case-item">
            <div>{loading ? <Loader /> : cases}</div>
            <div>Confirmed</div>
          </div>
          <div className="Case-item">
            <div>{loading ? <Loader /> : recovered}</div>
            <div>Recovered</div>
          </div>
          <div className="Case-item">
            <div>{loading ? <Loader /> : deaths}</div>
            <div>Deaths</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cases;
