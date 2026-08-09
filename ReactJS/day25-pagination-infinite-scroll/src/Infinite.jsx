import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { getAllProducts } from "./api/productAPI";
import ProductCard from "./Components/ProductCard";

const InfiniteScroll = () => {
  const loaderRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) => getAllProducts(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      const totalPages = Math.ceil((lastPage?.total || 0) / 10);
      return nextPage <= totalPages ? nextPage : undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (!loaderRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const products =
    data?.pages.flatMap((pageData) => pageData.products || []) || [];

  return (
    <div
      className="min-h-screen px-4 py-10 text-slate-100 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at top, rgba(34, 211, 238, 0.16), transparent 35%), linear-gradient(135deg, #020617, #111827)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Infinite scroll products
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Scroll down to load more products automatically.
          </p>
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
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div ref={loaderRef} className="mt-8 flex justify-center">
              {isFetchingNextPage ? (
                <div className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
                  Loading more products...
                </div>
              ) : !hasNextPage ? (
                <div className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-400">
                  You&apos;ve reached the end.
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
