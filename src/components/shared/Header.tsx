import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';

import '../../assets/styles/header.scss';

const menuItems = [
  { name: 'Donations', path: '/donations' },
  { name: 'FAQs', path: '/corona-faqs' },
];

function Menu(props) {
  const { openMenu, toggleMenu } = props;
  const menuClass = openMenu ? 'menu-container' : 'menu-container-none';
  return (
    <div className={menuClass}>
      <div className="menu-list-container">
        <ul>
          <li>
            <Link to="/" onClick={() => toggleMenu(false)}>
              Home
            </Link>
          </li>
          {menuItems.map((navLink) => (
            <li key={navLink.name}>
              <Link to={navLink.path} onClick={() => toggleMenu(false)}>
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="Header-container">
      {/* Header item  */}
      <div className="Header-item Header-logo-container">
        {/* logo container */}
        <div onClick={() => (window.location.href = '/')}>
          <IconButton>
            <AcUnitIcon />
          </IconButton>
        </div>
        <div onClick={() => (window.location.href = '/')}>
          <h2>Corona Virus Tracker - Uganda</h2>
        </div>
      </div>

      {/* Header item */}
      <div className="Header-item">
        {/* <div className="menu-items">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
          <div className="burger">
            <IconButton onClick={() => handleToggleMenu()}>
              <DehazeIcon />
            </IconButton>
            <Menu openMenu={openMenu} toggleMenu={handleToggleMenu} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
