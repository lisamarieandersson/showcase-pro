//ProjectPage.tsx
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProjectsIntro from '../../components/projects-intro/ProjectsIntro';
import './ProjectPage.scss';

function ProjectPage() {
  return (
    <div className="project-page">
      <Header />
      <ProjectsIntro />
      <Footer />
    </div>
  );
}

export default ProjectPage;
