import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return <div>

    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/main">Main</NavLink>
      
    </div>
  </div>;
};

export default Navbar;
