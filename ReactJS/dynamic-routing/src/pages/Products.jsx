import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-center text-4xl font-bold text-gray-900">
        Our Products
      </h1>

      <p className="mt-3 text-center text-gray-600">
        Explore our latest collection
      </p>

      {/* Products Grid */}
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-52 w-full object-contain"
            />

            {/* Product Information */}
            <div className="mt-4">
              <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
                {product.title}
              </h2>

              <p className="mt-2 text-xl font-bold text-blue-600">
                ${product.price}
              </p>

              {/* Dynamic Product Link */}
              <Link
                to={`/products/${product.id}`}
                className="mt-4 block rounded-lg bg-gray-900 px-4 py-2 text-center font-medium text-white transition hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
