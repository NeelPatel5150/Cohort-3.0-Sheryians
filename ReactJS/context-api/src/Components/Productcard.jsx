import React from "react";
import { useCart } from "../Context/CartContext";

const Productcard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center bg-slate-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {product.category}
          </span>
          <p className="text-lg font-bold text-slate-900">${product.price}</p>
        </div>

        <div>
          <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-slate-900">
            {product.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
          <span>
            Rating:{" "}
            <span className="font-semibold text-slate-800">
              {product.rating.rate}
            </span>
          </span>
          <span>
            Sold:{" "}
            <span className="font-semibold text-slate-800">
              {product.rating.count}
            </span>
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Productcard;
