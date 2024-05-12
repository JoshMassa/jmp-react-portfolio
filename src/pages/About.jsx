import React from 'react';
import '../styles/About.css';
import headshotImage from '../assets/headshot-no-background.png';

function About() {
    return (
        <>
            <article className='about-section'>
                <h1 id='about'>About Me</h1>
                <img id='me' src={headshotImage} alt='Photo of Joshua Massa-Pelletier'></img>
                <p className='about-description'>I am a 34 year old Full-Stack Web Developer born and raised in Central Connecticut. For the past 15 years, I've been an Executive Chef by trade. I've always had a passion for technology, and decided it's time to begin pursuing it full time.<br /><br /> My journey into technology began with a deep-seated passion for perpetual learning and growth, which has been a guiding force throughout my career. My technical skills include proficiency in different languages such as JavaScript - ES6, CSS3, and HTML5. I have strong familiarity with Git, Gitlab, and GitHub version control systems. I also have experience with frameworks like Node.js, React.js, Express.js, Bootstrap, and jQuery allowing me to seamlessly adapt to a multitude of projects. Creating APIs from scratch or integrating existing APIs is one of my strong suits.<br /><br /> Throughout my projects I utilize Responsive Web Design, Search Engine Optimization, Object Oriented Programming, and Object Relational Mapping to ensure higher placement in search results where applicable and code that is easier to read and maintain. To finish off the stack, I've learned to create and manage databases using MySQL, Sequelize, NoSQL, MongoDB, and Mongoose.<br /><br /> I am well-versed in agile planning and project management processes, and my background in restaurant management has honed my communication skills, allowing me to effectively interface with both technical and non-technical stakeholders. My experience has equipped me with the ability to produce reusable, well-documented code for a variety of applications.<br /><br />From my roots in restaurant management to my diverse experiences in technology, I've cultivated a skill set that enables me to tackle complex challenges with confidence and creativity. As I continue to evolve in this field, I remain committed to delivering innovative solutions, fostering collaborative environments, and pushing the boundaries of what's possible in web development.</p>
            </article>
        </>
    )
}

export default About;