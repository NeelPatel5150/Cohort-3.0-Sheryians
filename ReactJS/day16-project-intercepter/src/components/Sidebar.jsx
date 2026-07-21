import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/AuthHook";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6 flex flex-col ">
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-2 ">Dashboard</h1>

      {user ? (
        <p className="mb-8 text-sm text-gray-400">Signed in as {user.name}</p>
      ) : null}

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Products
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-auto ">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition text-left"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
