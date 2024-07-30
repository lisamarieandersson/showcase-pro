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
    </div>
  );
}

export default CvSwedishPage;
