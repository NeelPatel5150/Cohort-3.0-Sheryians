import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">
          Welcome to ShopZone
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          Discover amazing products at the best prices.
        </p>

        <Link
          to="/products"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
