import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__heading">Hello.</h1>
      <p className="contact__text">Get in touch.</p>
      <p className="contact__email-text">Email:</p>
      <a href="mailto:lisamarie.andersson@gmail.com" className="contact__email">
        lisamarie.andersson@gmail.com
      </a>
    </div>
  );
}

export default Contact;
