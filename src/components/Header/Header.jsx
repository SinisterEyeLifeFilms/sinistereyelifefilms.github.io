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
      <ul className="social-bar">
        <li className="social-links">
          <Link
            to="https://www.youtube.com/@sinistereye3020"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={25} color="#00a300" />
          </Link>
        </li>

        <li className="social-links">
          <Link
            to="https://www.facebook.com/profile.php?id=100077544337082"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={25} color="#00d100" />
          </Link>
        </li>

        <li className="social-links">
          <Link
            to="https://instagram.com"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={25} color="#00ff00" />
          </Link>
        </li>

        <li className="social-links">
          <Link
            to="mailto:sinistereyelifefilms@gmail.com"
            smooth
            duration={700}
            className="social-link"
          >
            <FaEnvelope size={25} color="#2eff2e" />
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
