// AboutPage.tsx
import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Presentation from '../../components/presentation/Presentation';
import './AboutPage.scss';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
      <Header />
      <Presentation />
      <Footer />
    </div>
  );
}

export default AboutPage;
