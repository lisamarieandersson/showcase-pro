// HomePage.tsx
import Intro from '../../components/intro/Intro';
import NavigationMenu from '../../components/navigation-menu/NavigationMenu';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="homepage">
      {/* <h1>Home</h1> */}
      <Intro />
      <NavigationMenu />
    </div>
  );
}

export default HomePage;
