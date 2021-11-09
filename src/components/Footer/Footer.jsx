import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__text">
        Проект студентов СПБГУТ
      </div>
      <div className="Footer__links-container">
        <div>© 2021</div>
        <div className="Footer__links">
          <div>СПБГУТ</div>
          <a href="https://github.com/H8ER-ru/avalanche-forecast" target="_blank" rel="noreferrer">Github</a>
          <div>Facebook</div>
        </div>
      </div>
    </div>
  );
}
