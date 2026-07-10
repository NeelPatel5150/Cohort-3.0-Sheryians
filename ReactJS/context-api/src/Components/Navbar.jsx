import React from "react";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setIsCartOpen(false)}
          className="flex items-center gap-3 text-left text-slate-900"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/20">
            L
          </span>
          <span className="text-lg font-semibold tracking-tight">Logo</span>
        </button>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              !isCartOpen
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-900 hover:text-white"
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isCartOpen
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-900 hover:text-white"
            }`}
          >
            Cart {cartItems.length ? `(${cartItems.length})` : ""}
          </button>
          <button
            type="button"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900 hover:text-white"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
