import Divider from '../divider/Divider';
import SocialIcons from '../social-icons/SocialIcons';
import './Footer.scss';

function Footer({ showSocialIcons = true }) {
  return (
    <div className="footer">
      <Divider />
      <div className="footer__content">
      {showSocialIcons ? <SocialIcons /> : <div></div>}
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Lisa Marie Andersson
        </p>
      </div>
    </div>
  );
}

export default Footer;
