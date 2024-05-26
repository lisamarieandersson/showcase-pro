// HomePage.tsx
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <Link to="/cv">CV</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default HomePage;
