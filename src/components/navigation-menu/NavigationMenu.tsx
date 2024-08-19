import { NavLink } from 'react-router-dom';
import './NavigationMenu.scss';

const links = [
    { path: '/', label: 'Home' },
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
                    <li key={index} className="navigation-menu__item">
                        <NavLink
                            to={link.path}
                            className={({ isActive }) => isActive ? 'navigation-menu__link navigation-menu__link--active' : 'navigation-menu__link'}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavigationMenu;
