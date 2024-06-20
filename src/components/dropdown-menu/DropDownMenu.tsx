import { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <ul className="dropdown-menu__list">
            <li className="dropdown-menu__item">
              <Link className="dropdown-menu__link" to="/">
                Home
              </Link>
            </li>
            <li className="dropdown-menu__item">
              <Link className="dropdown-menu__link" to="/about">
                About
              </Link>
            </li>
            <li className="dropdown-menu__item">
              <Link className="dropdown-menu__link" to="/cv">
                CV
              </Link>
            </li>
            <li className="dropdown-menu__item">
              <Link className="dropdown-menu__link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="dropdown-menu__item">
              <Link className="dropdown-menu__link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default DropDownMenu;
