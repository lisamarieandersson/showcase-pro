import './CvEnglishPage.scss';

function CvEnglishPage() {
  return (
    <div className="cv-english-page">
      <iframe
        className="cv-english-page__iframe"
        src="/assets/lisamarie-andersson-cv-english.pdf"
        title="My CV"
      >
        Your browser does not support PDFs. Please download the PDF to view it:
        <a href="/assets/lisamarie-andersson-cv-english.pdf">Download PDF</a>
      </iframe>
      <div className="cv-english-page__images">
        <img src="/assets/lisamarie-andersson-cv-english-1.png" alt="CV Page 1" />
        <img src="/assets/lisamarie-andersson-cv-english-2.png" alt="CV Page 2" />
      </div>
    </div>
  );
}

export default CvEnglishPage;
