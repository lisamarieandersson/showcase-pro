import './SocialIcons.scss';

const icons = [
  {
    name: 'github',
    svgPath: '/icons/github-icon.svg',
    url: 'https://github.com/lisamarieandersson',
  },
  {
    name: 'linkedin',
    svgPath: '/icons/linkedin-icon.svg',
    url: 'https://www.linkedin.com/in/lisa-marie-andersson-a11682140/',
  },
  {
    name: 'instagram',
    svgPath: '/icons/instagram-icon.svg',
    url: 'https://www.instagram.com/upthewoodenhills/',
  },
];

function SocialIcons() {
  return (
    <div className="social-icons">
      {icons.map((icon) => (
        <a
          className="social-icons__link"
          key={icon.name}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-icons__icon"
            src={icon.svgPath}
            alt={icon.name}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
