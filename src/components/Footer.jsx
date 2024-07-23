import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className="footer-copy"><span>&copy;{year}</span> ReactGames</p>

            <div className="footer-social">
                <a href="https://github.com/Tonips22" target='blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://www.linkedin.com/in/antonio-garc%C3%ADa-torres-a635992b6/" target='blank'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;