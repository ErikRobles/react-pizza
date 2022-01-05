import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return (
            <div>
              <MenuItem
                key={menuItem.id}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
