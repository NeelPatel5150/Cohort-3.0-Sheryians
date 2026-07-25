import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterBar from '../components/products/FilterBar'
import ProductGrid from '../components/products/ProductGrid'
import Spinner from '../components/ui/Spinner'
import { useCategories, useProducts } from '../hooks/useProducts'

export default function Products() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(params.get('category') || 'all')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setCategory(params.get('category') || 'all')
  }, [params])

  const { products, loading, error } = useProducts(
    category === 'all' ? 'all' : category
  )
  const { categories } = useCategories()

  const filtered = useMemo(() => {
    let list = [...products]

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }

    if (sort === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      list.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
    }

    return list
  }, [products, search, sort])

  return (
    <div className="animate-fade-up space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text)]">All Products</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {loading ? 'Loading...' : `${filtered.length} products found`}
        </p>
      </div>

      <FilterBar
        search={search}
        onSearch={setSearch}
        category={category}
        onCategory={setCategory}
        sort={sort}
        onSort={setSort}
        categories={categories}
      />

      {loading ? (
        <div className="flex justify-center py-20">
          <Spinner />
        </div>
      ) : error ? (
        <p className="py-16 text-center text-sm text-red-500">{error}</p>
      ) : (
        <ProductGrid products={filtered} />
      )}
    </div>
  )
}
