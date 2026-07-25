import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import toast from 'react-hot-toast'
import { useCart } from '../../hooks/useCart'

export default function ProductList({ title, icon: Icon, products }) {
  const { addItem } = useCart()

  function handleAdd(product) {
    addItem(product)
    toast.success('Added to cart')
  }

  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
      <div className="mb-4 flex items-center gap-2">
        {Icon ? <Icon size={18} className="text-accent" /> : null}
        <h3 className="text-lg font-bold text-[var(--text)]">{title}</h3>
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-2.5"
          >
            <Link
              to={`/products/${product.id}`}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-1.5"
            >
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </Link>

            <div className="min-w-0 flex-1">
              <Link
                to={`/products/${product.id}`}
                className="line-clamp-1 text-sm font-medium text-[var(--text)] hover:text-accent"
              >
                {product.title}
              </Link>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="text-sm font-bold text-accent">
                  ${product.price.toFixed(2)}
                </span>
                <span className="inline-flex items-center gap-0.5 text-xs text-[var(--text-muted)]">
                  <Star size={11} className="text-accent" fill="currentColor" />
                  {product.rating?.rate ?? 0}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleAdd(product)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-zinc-950 transition hover:bg-accent-hover cursor-pointer"
              aria-label={`Add ${product.title}`}
            >
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
