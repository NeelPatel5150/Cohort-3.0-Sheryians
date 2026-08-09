import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllProducts } from "./api/productAPI";
import ProductCard from "./Components/ProductCard";

const App = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, isError , isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts(page),
    placeholderData: keepPreviousData,
  });

  console.log(data);
  

  const products = data?.products || [];
  const totalPages = Math.ceil((data?.total || 0) / 10);

  return (
    <div
      className="min-h-screen px-4 py-10 text-slate-100 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at top, rgba(34, 211, 238, 0.16), transparent 35%), linear-gradient(135deg, #020617, #111827)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Browse products
            </p>
            <p className="text-sm text-slate-400">
              Showing page {page} of {totalPages || 1}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1 || isPending}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, totalPages || 1))
              }
              disabled={page === totalPages || isPending}
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {isPending ? (
          <div className="flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/70 py-16 text-slate-300">
            Loading products...
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center rounded-3xl border border-rose-800 bg-rose-950/30 py-16 text-rose-300">
            Error fetching products
          </div>
        ) : (
          <div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            style={{ opacity: isPlaceholderData ? 0.5 : 1, transition: "opacity 0.3s" }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
