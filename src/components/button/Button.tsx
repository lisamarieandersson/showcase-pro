import './Button.scss';

interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return <button className="button">{label}</button>;
}

export default Button;
