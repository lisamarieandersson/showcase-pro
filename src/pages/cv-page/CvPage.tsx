//CvPage.tsx
import { useEffect } from 'react';
import CvIntro from '../../components/cv-intro/CvIntro';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './CvPage.scss';

function CvPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cv-page">
      <Header />
      <CvIntro />
      <Footer />
    </div>
  );
}

export default CvPage;
