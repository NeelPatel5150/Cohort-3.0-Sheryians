import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-black via-slate-900 to-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
            Logo
          </h1>

          {/* Center Links */}
          <ul className="flex gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-white hover:text-blue-400"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-white hover:text-blue-400"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-white hover:text-blue-400"
              }
            >
              Contact
            </NavLink>
          </ul>

          {/* Login */}
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white">
            Login
          </button>
        </div>
      </nav>

      {/* Routes */}
      <div className="max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
