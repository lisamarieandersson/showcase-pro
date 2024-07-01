import Divider from '../divider/Divider';
import './Header.scss';
import DropDownMenu from '../dropdown-menu/DropDownMenu';

interface HeaderProps {
  showDropDownMenu?: boolean;
}


function Header({showDropDownMenu = true}: HeaderProps) {
  return (
    <div className="header">
      {showDropDownMenu && <DropDownMenu />}
      <Divider />
    </div>
  );
}

export default Header;
