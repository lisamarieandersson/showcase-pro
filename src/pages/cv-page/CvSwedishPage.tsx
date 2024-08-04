import './CvSwedishPage.scss';

function CvSwedishPage() {
  return (
    <div className="cv-swedish-page">
      <iframe
        className="cv-swedish-page__iframe"
        src="/assets/lisamarie-andersson-cv-swedish.pdf"
        title="My CV"
      >
        Your browser does not support PDFs. Please download the PDF to view it:
        <a href="/assets/lisamarie-andersson-cv-swedish.pdf">Download PDF</a>
      </iframe>
      <div className="cv-swedish-page__images">
        <img src="/assets/lisamarie-andersson-cv-swedish-1.png" alt="CV Page 1" />
        <img src="/assets/lisamarie-andersson-cv-swedish-2.png" alt="CV Page 2" />
      </div>
    </div>
  );
}

export default CvSwedishPage;
