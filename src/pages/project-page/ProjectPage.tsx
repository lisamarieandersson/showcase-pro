//ProjectPage.tsx
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './ProjectPage.scss';

function ProjectPage() {
  return (
    <div className="project-page">
      <Header />
      <h1 className="project-page__heading">Projects</h1>
      <Footer />
    </div>
  );
}

export default ProjectPage;
