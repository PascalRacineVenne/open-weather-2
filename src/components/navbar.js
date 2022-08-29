import React from 'react';
import Menu from './menu/menu.js';

const Navbar = () => {
  return (
    <div className='nav'>
      <p className='title'>SkySearch</p>
      <Menu />
    </div>
  );
};

export default Navbar;
