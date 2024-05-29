// ContactPage.tsx
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './ContactPage.scss';

function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <h1 className="contact-page__heading">Hello.</h1>
      <Footer />
    </div>
  );
}

export default ContactPage;
