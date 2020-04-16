import React from 'react';

import { Link } from 'react-router-dom';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import IconButton from '@material-ui/core/IconButton';

import '../../assets/styles/header.scss';

const menuItems = [
  { name: 'Cases', path: '/cases' },
  { name: 'Donations', path: '/donations' },
  { name: 'FAQs', path: '/faqs' },
];
function Header() {
  return (
    <div className="Header-container">
      {/* Header item  */}
      <div className="Header-item Header-logo-container">
        {/* logo container */}
        <div>
          <IconButton>
            <AcUnitIcon />
          </IconButton>
        </div>
        <div>
          <h2>Uganda Corona Tracker</h2>
        </div>
      </div>

      {/* Header item */}
      <div className="Header-item">
        <div className="menu-items">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
