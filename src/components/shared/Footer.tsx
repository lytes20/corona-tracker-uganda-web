import React from 'react';

import '../../assets/styles/footer.scss'

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="Footer-copyright">
        Developed by Gideon Bamuleseyo <span>(<Link to="https://twitter.com/gideon_b_">@gideon_b_</Link>)</span>
      </div>
    </footer>
  );
}
