//CvPage.tsx
import './CvPage.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function CvPage() {
  return (
    <div className="cv-page">
      <Header />
      <h1 className="cv-page__heading">CV</h1>
      {/*       <Button label="Swedish" />
      <Button label="English" /> */}
      <Footer />
    </div>
  );
}

export default CvPage;
