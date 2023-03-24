import insta from '../graphics/instagram.png';
import gmail from '../graphics/gmail.png';
import facebook from '../graphics/facebook.png';

import './footer.css';

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <h3>Connect with us</h3>
            <ul className="socials">
                <li><a href="https://google.com"><img src={insta} alt="Instagram"></img></a></li>
                <li><a href="https://google.com"><img src={gmail} alt="Gmail"></img></a></li>
                <li><a href="https://google.com"><img src={facebook} alt="Facebook"></img></a></li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;