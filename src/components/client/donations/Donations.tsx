import React, { useState } from 'react';

import '../../../assets/styles/donations.scss';

import DonationsTable from './DonationsTable';

function Donations(props) {
  const [donations] = useState([]);

  return (
    <div className="Donations-container">
      {/* Donations main container  */}
      <div className="Donations-main">
        <div className="Donations-heading Donations-head-item">
          <h1>Donations is still under development</h1>
          <h1>
            Donations <span>({donations.length})</span>
          </h1>
        </div>

        {/* Donations table  */}
        <div>
          <DonationsTable donations={donations} />
        </div>
      </div>

      {/* Donations Side bar  */}
      <div className="Donations-side"></div>
    </div>
  );
}

export default Donations;
