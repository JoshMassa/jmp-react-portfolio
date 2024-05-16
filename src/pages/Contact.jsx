import React from 'react';
import '../styles/Contact.css';
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    // State variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    // Grabs the name and value of the event that triggered a change
    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Set the state based on input type
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'company') {
            setCompany(inputValue);
        } else if (inputType === 'title') {
            setTitle(inputValue);
        } else {
            setMessage(inputValue);
        }

        if (errorMessage.toLowerCase().includes(inputType.toLowerCase())) {
            setErrorMessage('');
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (handleFormSubmit) {
            setSuccessMessage('Form submitted successfully!');
        }
        // Timeout to clear the success message from the form after 5 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
        // If the form submission was successful, reset the fields to an empty string
        setName('');
        setEmail('');
        setCompany('');
        setTitle('');
        setMessage('');
        setErrorMessage('');
    }

    const handleInputBlur = (event) => {
        const { name, value } = event.target;

        if (!value.trim()) {
            setErrorMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} field is required.`);
        } else if (name === 'email' && !validateEmail(value)) {
            setErrorMessage('Email is not in the correct format.');
        }
    }

    return (
        <div className='contact-container'>
            <h1 id='contact-h1'>Contact Me</h1>
            <p id='h1-p'>Have any questions? <br />If you're interested in collaborating, fill out the form below and I will get in touch with you as soon as possible!</p>
            <form className='form' onSubmit={handleFormSubmit}>
                <p>Name</p>
                <input
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type='text'
                    placeholder=' Name'
                    required
                    autoComplete='off'
                />
                <p>Email</p>
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type='email'
                    placeholder=' Email'
                    required
                    autoComplete='off'
                />
                <p>Company</p>
                <input
                    value={company}
                    name='company'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type='text'
                    placeholder=' Company'
                    required
                    autoComplete='off'
                />
                <p>Title</p>
                <input
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type='text'
                    placeholder=' Title'
                    required
                    autoComplete='off'
                />
                <p>Message</p>
                <textarea id='textarea'
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    rows='5'
                    required                    
                />
                <button id='submit' type='submit'>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
            {successMessage && (
                <div>
                    <p id='successMessage'>{successMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;