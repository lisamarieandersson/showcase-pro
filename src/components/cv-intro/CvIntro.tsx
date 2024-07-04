import Button from '../button/Button';
import './CvIntro.scss';


function CvIntro() {
    return (<div className="cv-intro">
        <h1 className="cv-intro__heading">CV</h1>
        <Button label="Swedish" />
        <Button label="English" />
    </div>);
}

export default CvIntro;