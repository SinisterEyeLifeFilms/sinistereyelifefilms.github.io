import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/self-logo.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <img
      src={Logo}
      alt="SELF-Logo"
      className="logo"
    />
    <Navbar />
    {/* Mobile Social icons */}
    <div>
      <ul className="social-bar--mobile">
        <li className="social-links--mobile">
          <Link
            to="https://www.youtube.com/@sinistereye3020"
            className="social-link--mobile"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={25} />
          </Link>
        </li>

        <li className="social-links--mobile">
          <Link
            to="https://www.facebook.com/profile.php?id=100077544337082"
            className="social-link--mobile"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={25} />
          </Link>
        </li>

        <li className="social-links--mobile">
          <Link
            to="https://instagram.com"
            className="social-link--mobile"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={25} />
          </Link>
        </li>

        <li className="social-links--mobile">
          <Link
            to="mailto:sinistereyelifefilms@gmail.com"
            smooth
            duration={700}
            className="social-link--mobile"
          >
            <FaEnvelope size={25} />
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
