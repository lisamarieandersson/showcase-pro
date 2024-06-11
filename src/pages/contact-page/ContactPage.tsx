// ContactPage.tsx
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './ContactPage.scss';

function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
