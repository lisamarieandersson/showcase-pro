//CvPage.tsx
import CvIntro from '../../components/cv-intro/CvIntro';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './CvPage.scss';

function CvPage() {
  return (
    <div className="cv-page">
      <Header />
      <CvIntro />
      <Footer />
    </div>
  );
}

export default CvPage;
