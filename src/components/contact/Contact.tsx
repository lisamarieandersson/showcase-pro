import SocialLinks from '../social-links/SocialLinks';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__heading">Hello.</h1>
      <p className="contact__text">Get in touch.</p>
      <div className="contact__email">
        <a
          href="mailto:lisamarie.andersson@gmail.com"
          className="contact__email-address"
        >
          lisamarie.andersson@gmail.com
        </a>
      </div>
      <SocialLinks />
    </div>
  );
}

export default Contact;
