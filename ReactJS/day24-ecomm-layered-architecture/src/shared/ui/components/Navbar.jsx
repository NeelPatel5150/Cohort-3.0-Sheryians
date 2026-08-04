import React from "react";
import { NavLink } from "react-router";
import { ShoppingCart,Box } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-5 py-4 px-10 bg-yellow-500">
      <h1>Logo</h1>

      <div className=" flex items-center gap-10 text-xl">
        <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-gray-700"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-gray-700"} to="/main/product">Shop</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-gray-700"} to="/main/about">About</NavLink>
      </div>

      <div className=" flex items-center gap-6">
        <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-gray-700"} to={"/main/cart"}>
          <ShoppingCart />
        </NavLink>

        <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-gray-700"} to={"/main/orders"}>
          <Box />
        </NavLink>
        <button className="px-5 py-1 rounded cursor-pointer text-white bg-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
