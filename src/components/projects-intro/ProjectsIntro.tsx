import './ProjectsIntro.scss';

function ProjectsIntro() {
    return (
        <div className="projects-intro">
            <h1 className="projects-intro__heading">Projects</h1>
            <p className="projects-intro__text">Welcome to my project page! I am currently working on
                updating this section to showcase my latest work. In the meantime, please visit my
                previous webpage for detailed information about my projects. You can find it <a className="projects-intro__link"
                    href="https://lisamarieandersson.github.io/cv/projects.html" target="_blank"
                    rel="noopener noreferrer">here</a>.</p>
        </div>
    )
}

export default ProjectsIntro;