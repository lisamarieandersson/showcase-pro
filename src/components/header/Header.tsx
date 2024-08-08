import Divider from '../divider/Divider';
import DropDownMenu from '../dropdown-menu/DropDownMenu';
import './Header.scss';

interface HeaderProps {
  showDropDownMenu?: boolean;
}


function Header({ showDropDownMenu = true }: HeaderProps) {
  return (
    <div className="header">
      {showDropDownMenu && <DropDownMenu />}
      <Divider />
    </div>
  );
}

export default Header;
