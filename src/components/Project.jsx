import React from 'react';
import '../styles/Project.css';
import githubLogo from '../assets/github-mark-white.png';

function Project({ title, description, instructions, imageUrl, projectUrl, githubUrl }) {

    return (
        <div className='project-container'>
                <img id='project-image' src={imageUrl} alt={title} />
                <div className='overlay'>
                    <div className='overlay-content'>
                        <a id='project-title' href={projectUrl} target='_blank'>{title}</a>
                        <p id='project-description'>{description}</p>
                        <p id='project-instructions'>{instructions}</p>
                        <a id='github-url' href={githubUrl} target='_blank'>
                            <img id='projects-github-logo' src={githubLogo} alt="Github Logo" />
                        </a>
                    </div>
                </div>
            <div className='project-image-container'>
            </div>

        </div>
    )
}

export default Project;