import { useState } from 'react';
import './DropDownMenu.scss';
import hamburgerIcon from '/icons/hamburger-menu-icon.svg';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={toggleOpen}>
        <img className="dropdown-menu__icon" src={hamburgerIcon} alt="Menu" />
      </button>
      {isOpen && (
        <nav
          className={`dropdown-menu__content ${
            isOpen ? 'dropdown-menu__content--open' : ''
          }`}
        >
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default DropDownMenu;
