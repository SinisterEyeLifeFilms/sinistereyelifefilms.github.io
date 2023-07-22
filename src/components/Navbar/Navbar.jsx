import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { path: '/', text: 'Videos' },
  { path: '/about', text: 'About' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul className="navlinks">
      {links.map(({ path, text }) => (
        <li key={text}>
          <NavLink
            to={path}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
