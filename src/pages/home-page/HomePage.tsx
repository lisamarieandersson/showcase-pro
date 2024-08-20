// HomePage.tsx
import { useEffect } from 'react';
import BigNavigationMenu from '../../components/big-navigation-menu/BigNavigationMenu';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import './HomePage.scss';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Header showNavigationMenu={false} />
      <Intro />
      <BigNavigationMenu />
      <Footer />
    </div>
  );
}

export default HomePage;
