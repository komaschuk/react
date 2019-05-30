import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../../assets/img/logo.svg';

const Logo = ({ logo }) => (
  <Link to="/">
    <img
      className="logo"
      src={AppLogo}
      alt="Logo"
      width={logo.logoWidth}
      height={logo.logoHeight}
    />
  </Link>
);

export default Logo;
