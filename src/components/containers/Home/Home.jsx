import { MenuItem } from '../../MenuItem/MenuItem';
import './Home.css';
import { Items } from '../../../mocks/menu-items.mock';
import { useContext } from 'react';
import { MenuContext } from '../../../contexts/MenuContext';

export function Home() {
  const menu = Items;
  const { menuItems } = useContext(MenuContext);



  return (
    <div className='home'>
      <nav>
        <p>Welcome, User</p>
      </nav>

      <hr />

      <div className='salad-options'>
        {
          menu.map((option, index) => {
            return (
              <MenuItem key={ index } title={ option.title } icon={ option.icon } />
            )
          })
        }
      </div>

      <div className='current-menu'>
        {
          menuItems.items.map((item, index) => <div key={ index }>{ item }</div>)
        }
      </div>
    </div>
  );
}