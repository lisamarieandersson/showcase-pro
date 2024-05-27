import './SocialIcons.scss';

const icons = [
  { name: 'github', svgPath: '/icons/github-icon.svg' },
  { name: 'linkedin', svgPath: '/icons/linkedin-icon.svg' },
  { name: 'instagram', svgPath: '/icons/instagram-icon.svg' },
];

function SocialIcons() {
  return (
    <div className="social-icons">
      {icons.map((icon) => (
        <img
          key={icon.name}
          src={icon.svgPath}
          alt={icon.name}
          width="32"
          height="32"
        />
      ))}
    </div>
  );
}

export default SocialIcons;
