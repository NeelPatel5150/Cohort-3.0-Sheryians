import { useMemo, useState } from "react";
import {
  useAllProducts,
  useProductsByCategory,
} from "../../hooks/useProductHooks";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("all");
  const { data, isLoading, error } = useAllProducts(searchValue);
  const products = useMemo(() => data?.products ?? [], [data]);

  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useProductsByCategory(categoryValue);

  const categoryProducts = useMemo(
    () => categoryData?.products ?? [],
    [categoryData],
  );

  const activeProducts = useMemo(
    () => (categoryValue === "all" ? products : categoryProducts),
    [categoryProducts, categoryValue, products],
  );

  if (isLoading) {
    return (
      <div className="min-h-[60vh] bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 text-slate-700 shadow-sm">
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-rose-200 bg-rose-50 p-8 text-rose-700 shadow-sm">
          Failed to load products.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
     

        <Filter
          searchValue={searchValue}
          categoryValue={categoryValue}
          onSearchChange={setSearchValue}
          onCategoryChange={setCategoryValue}
        />

        {activeProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-12 text-center text-slate-500 shadow-sm">
            No products found.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {activeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    
  );
};

export default ProductPage;
