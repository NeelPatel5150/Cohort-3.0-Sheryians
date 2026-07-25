import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const icons = {
  electronics: '💻',
  jewelery: '💍',
  "men's clothing": '👔',
  "women's clothing": '👗',
}

export default function CategoryGrid({ categories, products }) {
  const counts = categories.reduce((acc, cat) => {
    acc[cat] = products.filter((p) => p.category === cat).length
    return acc
  }, {})

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--text)]">
          Shop by Category
        </h2>
        <Link
          to="/products"
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
        >
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/products?category=${encodeURIComponent(cat)}`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition hover:-translate-y-0.5 hover:border-accent/40"
          >
            <span className="text-2xl">{icons[cat] || '🛍️'}</span>
            <p className="mt-3 text-sm font-semibold capitalize text-[var(--text)]">
              {cat}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              {counts[cat] || 0} items
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
