//ProjectPage.tsx
import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProjectsIntro from '../../components/projects-intro/ProjectsIntro';
import './ProjectPage.scss';

function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-page">
      <Header />
      <ProjectsIntro />
      <Footer />
    </div>
  );
}

export default ProjectPage;
