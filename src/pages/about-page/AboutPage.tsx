// AboutPage.tsx
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Presentation from '../../components/presentation/Presentation';
import './AboutPage.scss';

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <Presentation />
      <Footer />
    </div>
  );
}

export default AboutPage;
