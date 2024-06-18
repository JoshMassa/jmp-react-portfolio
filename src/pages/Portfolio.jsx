import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';
import melodyExchangeImage from '../assets/melody-exchange-ss.png';
import employeeTrackerGif from '../assets/employee-tracker.gif';
import socialMediaApiGif from '../assets/social-media-api.gif';
import smileGeneratorGif from '../assets/smile-generator.gif';
import noteTakerImage from '../assets/note-taker.png';
import techBlogImage from '../assets/tech-blog-ss.png';
import easeImage from '../assets/ease.png'

function Portfolio() {
    const instructions = 'Click the title or Github logo for more information.';

    const projects = [

        {
            id: 1,
            title: 'Ease',
            description: 'A social-media like chat application that allows users to connect to others and chat in real time.',
            instructions,
            imageUrl: easeImage,
            projectUrl: 'https://chat-test-bquw.onrender.com',
            githubUrl: 'https://github.com/JoshMassa/Ease'
        },
        {
            id: 2,
            title: 'Melody Exchange',
            description: 'A Full Stack Application where users can buy and sell used instruments.',
            instructions,
            imageUrl: melodyExchangeImage,
            projectUrl: 'https://jmp-melody-exchange-ec87232d5088.herokuapp.com/',
            githubUrl: 'https://github.com/JoshMassa/melody-exchange'
        },
        {
            id: 3,
            title: 'Employee Tracker',
            description: 'A command-line application that accepts user input to view and manage departments, roles, and employees of a company.',
            instructions,
            imageUrl: employeeTrackerGif,
            projectUrl: 'https://drive.google.com/file/d/1ocnF2lDZoVTmjFu9cXO_WQr09ug0SO8b/view',
            githubUrl: 'https://github.com/JoshMassa/employee-tracker'
        },
        {
            id: 4,
            title: 'Social Media API',
            description: 'A Social Media API designed to manage users, their posts, and reactions to these posts.',
            instructions,
            imageUrl: socialMediaApiGif,
            projectUrl: 'https://drive.google.com/file/d/1ud2H61gVAObP5pFZSt5cuARcnAVptl0k/view',
            githubUrl: 'https://github.com/JoshMassa/social-media-api'
        },
        {
            id: 5,
            title: 'Smile Generator',
            description: 'An application that gives users the ability to view randomly generated jokes and pictures to brighten their day.',
            instructions,
            imageUrl: smileGeneratorGif,
            projectUrl: 'https://joshmassa.github.io/smile-generator/',
            githubUrl: 'https://github.com/JoshMassa/smile-generator'
        },
        {
            id: 6,
            title: 'Note Taker',
            description: 'An application that allows users to record and save notes so they can organize their thoughts and keep track of tasks they need to complete.',
            instructions,
            imageUrl: noteTakerImage,
            projectUrl: 'https://note-taker-jmp-5dc91171bb01.herokuapp.com/',
            githubUrl: 'https://github.com/JoshMassa/note-taker'
        },
        {
            id: 7,
            title: 'Tech Blog',
            description: 'A full-stack blog application that allows users to view posts and comments. If a user signs up, they also have the ability to add, edit, and delete their own posts.',
            instructions,
            imageUrl: techBlogImage,
            projectUrl: 'https://jm-tech-blog-fe718f2a2321.herokuapp.com/',
            githubUrl: 'https://github.com/JoshMassa/tech-blog'
        }
    ];

    return (
        <div className='portfolio'>
            {projects.map(project => (
                <Project
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    instructions={project.instructions}
                    imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}
                    githubUrl={project.githubUrl}
                />
            ))}
        </div>
    );
}

export default Portfolio;