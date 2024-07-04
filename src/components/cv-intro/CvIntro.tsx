import Button from '../button/Button';
import './CvIntro.scss';


function CvIntro() {
    return (<div className="cv-intro">
        <h1 className="cv-intro__heading">Cv</h1>
        <Button label="Swedish" to={"/cv/swedish"} />
        <Button label="English" to={"/cv/english"} />
    </div>);
}

export default CvIntro;