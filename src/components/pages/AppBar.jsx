import { NavLink, Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <nav className="header">
        <NavLink
          className={({ isActive }) => (isActive ? 'navLinkActive' : 'navLink')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'navLinkActive' : 'navLink')}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </header>
  );
};
