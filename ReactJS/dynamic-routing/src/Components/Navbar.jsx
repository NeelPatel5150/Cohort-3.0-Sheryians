import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-10 py-5 text-white">
      {/* Logo */}
      <h2 className="text-2xl font-bold">ShopZone</h2>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-400"
              : "transition hover:text-blue-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-400"
              : "transition hover:text-blue-400"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-400"
              : "transition hover:text-blue-400"
          }
        >
          Products
        </NavLink>
        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
