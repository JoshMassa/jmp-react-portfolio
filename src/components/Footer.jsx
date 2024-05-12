import '../styles/Footer.css';
import githubLogo from '../assets/github-mark-white.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import twitterLogo from '../assets/twitter-icon.png';

function Footer() {

    return (
        <footer>
            <a href='https://github.com/JoshMassa' target='_blank'>
                <img id='github-logo' src={githubLogo} alt='Github Logo'></img>
            </a>

            <a href='https://www.linkedin.com/in/joshua-massa-pelletier/' target='_blank'>
                <img id='linkedin-logo' src={linkedinLogo} alt='LinkedIn Logo'></img>
            </a>

            <a href='https://twitter.com/JoshMassa22' target='_blank'>
                <img id='twitter-logo' src={twitterLogo} alt='Twitter Logo'></img>
            </a>
        </footer>
    )
}

export default Footer;