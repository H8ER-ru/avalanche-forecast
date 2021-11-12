import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import BurgerImage from '../../assets/burger-menu.svg';

export default function Header() {
  function burgerClickHandler() {
    document.querySelector('.Side-menu').classList.add('Side-menu--active');
  }

  return (
    <div className="Header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <button
        onClick={burgerClickHandler}
        className="Header__button"
        type="button"
      >
        <img
          className="Header__image"
          width="100"
          height="100"
          src={BurgerImage}
          alt="Бургер Меню"
        />
      </button>
    </div>
  );
}
