import './CvEnglishPage.scss';

//TODO: Add English version of CV
function CvEnglishPage() {
  return (
    <div className="cv-english-page">
      <iframe
        className="cv-english-page__iframe"
        src="/assets/lisamarie-andersson-cv-2024.pdf"
        title="My CV"
      >
        Your browser does not support PDFs. Please download the PDF to view it:
        <a href="/assets/lisamarie-andersson-cv-2024.pdf">Download PDF</a>
      </iframe>
    </div>
  );
}

export default CvEnglishPage;
