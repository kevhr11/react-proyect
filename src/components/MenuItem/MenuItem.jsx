import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import './MenuItem.css';

export function MenuItem(props) {
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const handleNewMenuItem = (itemName) => {
    const newMenu = [ ...menuItems.items ];

    newMenu.push(itemName);

    setMenuItems({ items: newMenu });
  };

  return (
    <button className="menu-item" onClick={ () => handleNewMenuItem(props.title) }>
      <label htmlFor="">{ props.title }</label>
      <span>{ props.icon }</span>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </button>

    
  );
}

