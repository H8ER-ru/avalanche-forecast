import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
