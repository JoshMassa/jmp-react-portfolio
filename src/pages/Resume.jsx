import React from 'react';
import '../styles/Resume.css';

function Resume() {

    return (
        <div className='resume-container'>
            <h1 id='resume-h1'>Resume</h1>
            <p> Download My&nbsp;
                <a id='resume-download' href="/Joshua_Massa_Pelletier.pdf" download='Joshua_Massa_Pelletier.pdf'>
                    Resume
                </a>
            </p>
            <h2>Front-End Proficiencies</h2>
            <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Responsive Web Design</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
            </ul>
            <h2>Back-End Proficiencies</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>NoSQL</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Search Engine Optimization</li>
            </ul>
        </div>
    )
}

export default Resume;