import { useState } from 'react';
import './Accordion.scss';

const projects = [
    {
        title: 'Project 1',
        description: 'Description 1',
    },
    {
        title: 'Project 2',
        description: 'Description 2',
    },
    {
        title: 'Project 3',
        description: 'Description 3',
    },
];

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };
    return (
        <ul className='accordion'>
            {projects.map((project, index) => (
                <li key={index}>
                    <button onClick={() => handleClick(index)}>
                        {project.title}
                    </button>
                    {activeIndex === index && (
                        <div>
                            {project.description}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Accordion;