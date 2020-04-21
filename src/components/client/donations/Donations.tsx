import React, { useState, useEffect } from 'react';

import '../../../assets/styles/donations.scss';

import DonationsTable from './DonationsTable';
import Loader from '../../shared/Loader';
import firebase from '../../../config/firebaseConfig';

function Donations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    let db = firebase.firestore();
    db.collection('donations')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let donationsArray = doc.data();
          setDonations(donationsArray.results);
          setLoading(false);
        });
      })
      .catch((error) => setError(error));
    return () => {};
  }, []);

  return (
    <div className="Donations-container">
      {/* Donations main container  */}
      <div className="Donations-main">
        {error ? (
          <div>
            <span className="Error">Can not display cases now</span>
          </div>
        ) : (
          <React.Fragment>
            <div className="Donations-heading Donations-head-item">
              <span className="Error">Please note that donations are still being uploaded, check again later for a full list</span>
              <h1>
                Donations <span>({donations.length})</span>
              </h1>
            </div>

            {loading && <Loader />}
            {/* Donations table  */}
            <div>
              <DonationsTable donations={donations} />
            </div>
          </React.Fragment>
        )}
      </div>

      {/* Donations Side bar  */}
      <div className="Donations-side"></div>
    </div>
  );
}

export default Donations;
