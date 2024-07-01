// HomePage.tsx
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import NavigationMenu from '../../components/navigation-menu/NavigationMenu';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      <Header showDropDownMenu={false} />
      <Intro />
      <NavigationMenu />
      <Footer />
    </div>
  );
}

export default HomePage;
