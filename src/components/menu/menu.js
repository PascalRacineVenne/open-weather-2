import React, { useState } from 'react';
import Arrow from '../../images/arrow.svg';
import BurgerMenu from './burger-menu.js';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBackClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='left-col'>
      <BurgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <nav className={menuOpen ? 'show-menu' : ''}>
        <img
          src={Arrow}
          alt='arrow'
          className='back-btn'
          onClick={handleBackClick}
        />
        <ul>
          <li>
            <a href='/#'>Enjoy</a>
          </li>
          <li>
            <a
              href='https://pascalracinevenne.herokuapp.com/'
              alt='my site'
              rel='noopener noreferrer'
              target='_blank'
              className='active'
            >
              Website
            </a>
          </li>
          <li>
            <a
              href='https://pascalracinevenne.herokuapp.com/static/media/resume%20PascalRacineVenne.005b0159.pdf'
              alt='my site'
              rel='noopener noreferrer'
              target='_blank'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
