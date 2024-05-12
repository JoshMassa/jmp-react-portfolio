import React from 'react';
import '../styles/About.css';
import headshotImage from '../assets/headshot-no-background.png';
import SkillChart from '../components/SkillChart';

function About() {
    return (
        <>
            <article className='about-section'>
                <p id='about-header'>I'M<br /><span className='emphasis'>JOSHUA MASSA-PELLETIER</span><br /> A PROFESSIONAL <br /><span className='emphasis'>FULL STACK WEB DEVELOPER</span><br /></p>
                <img id='me' src={headshotImage} alt='Photo of Joshua Massa-Pelletier'></img>
                <p className='about-description'>
                    With an educational background in technology from both the University of California, Los Angeles and Harvard's School of Engineering and Applied Sciences, I possess the skills required to elevate your next project to the epitome of success.<br /><br />
                    Over the past year, I've immersed myself in developing a variety of APIs for multiple projects, ranging from e-commerce websites to personalized blogs and even a comprehensive weather dashboard.<br /><br />
                    On the server side, I utilize the power of Node.js and Express, integrating databases like MongoDB with Mongoose for document-based operations, and MySQL paired with Sequelize for relational data management.<br /><br />
                    On the client side, I leverage React.js to build intuitive user interfaces, utilizing its component-based architecture to develop reusable UI elements. This approach enhances scalability and ensures responsive application behavior.<br /><br />
                    <span className='emphasis'>Like what you see?</span><br />
                    Let's get in touch, you'll be happy we did!
                </p>
                <SkillChart />
            </article>
        </>
    )
}

export default About;