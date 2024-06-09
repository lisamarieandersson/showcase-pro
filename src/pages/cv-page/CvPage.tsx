//CvPage.tsx
import './CvPage.scss';

function CvPage() {
  return (
    <div className="cv-page">
      <iframe
        className="cv-page__iframe"
        src="/assets/lisamarie-andersson-cv-2024.pdf"
        title="My CV"
      >
        Your browser does not support PDFs. Please download the PDF to view it:
        <a href="/assets/lisamarie-andersson-cv-2024.pdf">Download PDF</a>
      </iframe>
    </div>
  );
}

export default CvPage;
