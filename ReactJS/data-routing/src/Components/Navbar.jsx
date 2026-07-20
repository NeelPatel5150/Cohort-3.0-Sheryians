import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = "text-blue-600 border-b-2 border-blue-600 pb-1";

  const normalLink = "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Data Router</h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
