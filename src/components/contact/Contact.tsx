import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__heading">Hello.</h1>
      <p className="contact__text">Get in touch.</p>
      <div className="contact__email">
        <p className="contact__email-text">Email:&nbsp;</p>
        <a
          href="mailto:lisamarie.andersson@gmail.com"
          className="contact__email-address"
        >
          lisamarie.andersson@gmail.com
        </a>
      </div>
      <div className="contact__internet">
        <p className="contact__internet-text">On the Internet:</p>
        <a
          href="https://www.linkedin.com/in/lisa-marie-andersson-a11682140/"
          className="contact__internet-link"
        >
          Linkedin
        </a>
        <p className="contact__internet-text">/</p>
        <a
          href="https://github.com/lisamarieandersson"
          className="contact__internet-link"
        >
          Github
        </a>
        <p className="contact__internet-text">/</p>
        <a
          href="https://www.instagram.com/upthewoodenhills/"
          className="contact__internet-link"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Contact;
