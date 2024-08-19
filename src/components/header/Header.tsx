import Divider from '../divider/Divider';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import './Header.scss';

interface HeaderProps {
  showNavigationMenu?: boolean;
}


function Header({ showNavigationMenu = true }: HeaderProps) {
  return (
    <div className="header">
      {showNavigationMenu && <NavigationMenu />}
      <Divider />
    </div>
  );
}

export default Header;
