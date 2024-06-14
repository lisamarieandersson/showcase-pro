import './SocialLinks.scss';

const links = [
  {
    name: 'Github',
    url: 'https://github.com/lisamarieandersson',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/lisa-marie-andersson-a11682140/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/upthewoodenhills/',
  },
];

function SocialLinks() {
  return (
    <div className="social-links">
        {links.map((link) => (
          <a
            key={link.name}
            className="social-links__link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}{' '}
            <img
              className="social-links__icon"
              src="/icons/arrow-icon.svg"
              alt=""
            />
          </a>
        ))}
    </div>
  );
}

export default SocialLinks;
