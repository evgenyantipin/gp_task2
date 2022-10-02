import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container-sm">
      <nav className="navbar navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pt-2" />
      <Outlet />
    </div>
  );
}

export default Layout;
