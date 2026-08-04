import { Search } from "lucide-react";
import { useMemo } from "react";
import { useAllCategories } from "../../hooks/useProductHooks";

const Filter = ({
  searchValue,
  categoryValue,
  onSearchChange,
  onCategoryChange,
}) => {
  const { data, isLoading, error } = useAllCategories();
  const categories = useMemo(() => {
    return data ?? [];
  }, [data]);

  return (
    <div className="mb-8 rounded-4xl border border-white/70 bg-white/85 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-xl">
          <label
            className="mb-2 block text-sm font-semibold text-slate-700"
            htmlFor="product-search"
          >
            Search products
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-amber-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-amber-100">
            <Search size={18} className="shrink-0 text-slate-400" />
            <input
              id="product-search"
              type="search"
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search by title, brand, or description"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="w-full lg:max-w-sm">
          <label
            className="mb-2 block text-sm font-semibold text-slate-700"
            htmlFor="category-select"
          >
            Category
          </label>
          <select
            id="category-select"
            value={categoryValue}
            onChange={(event) => onCategoryChange(event.target.value)}
            disabled={isLoading || error}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition disabled:cursor-not-allowed disabled:opacity-60 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
