import { Link } from 'react-router-dom'
import { ShoppingCart, Star } from 'lucide-react'
import toast from 'react-hot-toast'
import { useCart } from '../../hooks/useCart'
import Button from '../ui/Button'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const rating = product.rating?.rate ?? 0
  const count = product.rating?.count ?? 0

  function handleAdd(e) {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast.success('Added to cart')
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/50"
    >
      <div className="relative flex h-44 items-center justify-center bg-white p-5">
        <span className="absolute top-3 left-3 rounded-full bg-zinc-900/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">
          {product.category}
        </span>
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition duration-200 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium capitalize text-accent">
          {product.category}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-[var(--text)]">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-accent">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              fill={i < Math.round(rating) ? 'currentColor' : 'none'}
              className={i < Math.round(rating) ? '' : 'text-[var(--border)]'}
            />
          ))}
          <span className="ml-1 text-xs text-[var(--text-muted)]">
            ({count})
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-accent">
            ${product.price.toFixed(2)}
          </span>
          <Button
            className="!rounded-full !px-3 !py-2 text-xs"
            onClick={handleAdd}
          >
            <ShoppingCart size={14} />
            Add
          </Button>
        </div>
      </div>
    </Link>
  )
}
