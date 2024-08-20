// ContactPage.tsx
import { useEffect } from 'react';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './ContactPage.scss';

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-page">
      <Header />
      <Contact />
      <Footer showSocialIcons={false} />
    </div>
  );
}

export default ContactPage;
