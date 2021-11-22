import React from 'react';
import './SideMenu.css';
import CloseSvg from '../../assets/close-button.svg';

export default function SideMenu() {
  function closeButtonHandler() {
    document.querySelector('.Side-menu').classList.remove('Side-menu--active');
  }

  return (
    <aside className="Side-menu">
      <button
        className="Side-menu__close"
        onClick={closeButtonHandler}
        type="button"
      >
        <img
          height={50}
          width={50}
          src={CloseSvg}
          alt="Закрыть меню"
        />
      </button>
      <h1 className="Side-menu__title">Обслуживаемый участок</h1>
      <div className="Side-menu__places">
        <button
          className="Side-menu__btn"
          type="button"
        >
          Хибины
        </button>
        <button
          className="Side-menu__btn"
          type="button"
        >
          Красная поляна
        </button>
      </div>
    </aside>
  );
}
