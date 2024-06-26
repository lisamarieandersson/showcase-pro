// AboutPage.tsx
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './AboutPage.scss';

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
        <h1 className="about-page__heading">About</h1>
      <Footer/>
    </div>
  );
}

export default AboutPage;
