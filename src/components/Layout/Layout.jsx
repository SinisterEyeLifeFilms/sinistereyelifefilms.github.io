import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css';
import Logo from '../../assets/self-logo.png';

const Layout = () => (
  <>
    <header className="header">
      <img
        src={Logo}
        alt="SELF-Logo"
        className="logo"
      />
      <Navbar />
    </header>

    <main className="content">
      <Outlet />
    </main>
  </>
);

export default Layout;
