import { Link } from 'react-router-dom';
import './NavigationMenu.scss';

function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__list">
        <li className="navigation-menu__item">
          <Link className="navigation-menu__link" to="/about">
            About
          </Link>
        </li>
        <li className="navigation-menu__item">
          <Link className="navigation-menu__link" to="/cv">
            CV
          </Link>
        </li>
        <li className="navigation-menu__item">
          <Link className="navigation-menu__link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="navigation-menu__item">
          <Link className="navigation-menu__link" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
