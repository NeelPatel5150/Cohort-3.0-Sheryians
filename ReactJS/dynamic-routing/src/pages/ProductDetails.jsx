import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 font-medium text-blue-600">{product.category}</p>

          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

          <p className="mt-4 leading-7 text-gray-600">{product.description}</p>

          <p className="mt-6 text-3xl font-bold text-blue-600">
            ${product.price}
          </p>

          <p className="mt-3 text-gray-700">⭐ Rating: {product.rating}</p>

          <p className="mt-2 text-gray-700">Stock: {product.stock}</p>

          <Link
            to="/products"
            className="mt-8 w-fit rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
