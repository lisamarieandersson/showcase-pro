import { Link } from 'react-router-dom';
import './BigNavigationMenu.scss';

const links = [
  { path: '/about', label: 'About' },
  { path: '/cv', label: 'CV' },
  { path: '/contact', label: 'Contact' },
  { path: '/projects', label: 'Projects' },
];

function BigNavigationMenu() {
  return (
    <nav className="big-navigation-menu">
      <ul className="big-navigation-menu__list">
        {links.map((link, index) => (
          <li key={index} className="big-navigation-menu__item">
            <Link className="big-navigation-menu__link" to={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BigNavigationMenu;
