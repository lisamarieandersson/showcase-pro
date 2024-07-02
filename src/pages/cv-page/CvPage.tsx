//CvPage.tsx
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './CvPage.scss';

function CvPage() {
  return (
    <div className='cv-page'>
      <Header />
      <h1 className='cv-page__heading'>CV</h1>
      {/*       <Button label="Swedish" />
      <Button label="English" /> */}
      <Footer />
    </div>
  );
}

export default CvPage;
