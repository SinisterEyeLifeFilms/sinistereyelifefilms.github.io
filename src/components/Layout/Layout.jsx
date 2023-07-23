import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.css';

const Layout = () => (
  <>
    <Header />
    <main className="content">
      <Outlet />
    </main>
  </>
);

export default Layout;
