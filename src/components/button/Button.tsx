import { Link } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
  label: string;
  to: string;
}

function Button({ label, to }: ButtonProps) {
  return <Link to={to} className="button">{label}</Link>;
}

export default Button;
