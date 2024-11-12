import './Presentation.scss';

function Presentation() {
    return (
        <div className="presentation">
            {/*  <h1 className="presentation__heading">About</h1> */}
            <h2 className="presentation__intro">Hi, I'm Lisa Marie.
                Newly graduated Frontend Developer with previous experience in design, home furnishing,
                entrepreneurship and customer relations. </h2>
            <p className="presentation__text">I've been passionate about design for my entire life. Having operated
                my own business in the design sector for nearly a decade, and gaining years of sales and customer
                service expertise through roles at niched companies like Très Bien and Fine Little Day, as well as
                notable large-scale organizations including IKEA and H&M Group. This wealth of experience, as well
                as a growing interest in digital design, inspired me to advance further and enrich my professional
                toolkit with web development capabilities.</p>
            <p className="presentation__text">My enthusiasm for leveraging the latest techniques, tools, and strategies
                in web development has grown immensely since September 2022, when I began my Higher Vocational Diploma
                education at Medieinstitutet in Gothenburg. This period has been marked by a profound learning experience
                in web development, including HTML, CSS, JavaScript, TypeScript, React, Svelte, Next.js, Node.js, Vitest
                and Figma.</p>

            <p className="presentation__text">I thrive in agile environments, using Scrum, where collaboration with UX designers,
                back-end developers, product managers, and end users has been key in solving complex problems and delivering
                high-quality digital products that balance user needs, technical feasibility, and business goals.</p>
        </div>
    )
}

export default Presentation;