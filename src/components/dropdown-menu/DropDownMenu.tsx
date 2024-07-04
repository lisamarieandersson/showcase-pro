import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDownMenu.scss';
import hamburgerIcon from '/icons/hamburger-menu-icon.svg';

//TODO: Make dropdown close if user clicks on current link for page

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
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
              <Link className="dropdown-menu__link" to={link.path}>
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
