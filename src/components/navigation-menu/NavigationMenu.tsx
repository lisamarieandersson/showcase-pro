import { Link } from 'react-router-dom';
import './NavigationMenu.scss';

const links = [
  { path: '/about', label: 'About' },
  { path: '/cv', label: 'CV' },
  { path: '/contact', label: 'Contact' },
  { path: '/projects', label: 'Projects' },
];

function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__list">
        {links.map((link, index) => (
          <li key={index} className="dropdown-menu__item">
            <Link className="dropdown-menu__link" to={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
