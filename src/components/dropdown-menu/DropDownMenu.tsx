import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DropDownMenu.scss';
import hamburgerIcon from '/icons/hamburger-menu-icon.svg';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0';
    }
  }, [isOpen]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Contact' },
    { path: '/projects', label: 'Projects' },
  ];

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      setIsOpen(false); // Close the menu if the user clicks on the current link
    }
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={toggleOpen}>
        <img className="dropdown-menu__icon" src={hamburgerIcon} alt="Menu" />
      </button>
      <nav
        ref={contentRef}
        className={`dropdown-menu__content ${isOpen ? 'dropdown-menu__content--open' : ''
          }`}
      >
        <ul className="dropdown-menu__list">
          {links.map((link, index) => (
            <li key={index} className="dropdown-menu__item">
              <Link className="dropdown-menu__link" to={link.path}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DropDownMenu;
