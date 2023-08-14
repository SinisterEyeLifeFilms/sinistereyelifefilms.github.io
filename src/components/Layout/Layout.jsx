import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.css';
import Footer from '../Footer/Footer';

const Layout = () => (
  <>
    <Header />
    <main className="content">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
