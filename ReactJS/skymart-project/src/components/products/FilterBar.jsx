import { Search } from 'lucide-react'

export default function FilterBar({
  search,
  onSearch,
  category,
  onCategory,
  sort,
  onSort,
  categories = [],
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 sm:flex-row sm:items-center">
      <label className="relative flex flex-1 items-center">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 text-[var(--text-muted)]"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-transparent bg-[var(--input)] py-2.5 pr-3 pl-9 text-sm text-[var(--text)] outline-none focus:border-accent"
        />
      </label>

      <div className="flex gap-2">
        <select
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className="rounded-xl border border-[var(--border)] bg-[var(--input)] px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-accent cursor-pointer"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => onSort(e.target.value)}
          className="rounded-xl border border-[var(--border)] bg-[var(--input)] px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-accent cursor-pointer"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>
  )
}
