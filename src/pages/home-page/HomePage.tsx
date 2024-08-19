// HomePage.tsx
import BigNavigationMenu from '../../components/big-navigation-menu/BigNavigationMenu';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      <Header showDropDownMenu={false} />
      <Intro />
      <BigNavigationMenu />
      <Footer />
    </div>
  );
}

export default HomePage;
