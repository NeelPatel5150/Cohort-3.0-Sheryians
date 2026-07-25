import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  RefreshCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react'
import toast from 'react-hot-toast'
import ProductGrid from '../components/products/ProductGrid'
import Button from '../components/ui/Button'
import Spinner from '../components/ui/Spinner'
import { useCart } from '../hooks/useCart'
import { useProduct, useProducts } from '../hooks/useProducts'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { product, loading, error } = useProduct(id)
  const { products } = useProducts()
  const { addItem } = useCart()

  const related = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4)

  function handleAdd() {
    if (!product) return
    addItem(product)
    toast.success('Added to cart')
  }

  function goNext() {
    const nextId = Number(id) + 1
    if (nextId > 20) {
      navigate('/products/1')
    } else {
      navigate(`/products/${nextId}`)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-red-500">{error || 'Product not found'}</p>
        <Link to="/products" className="mt-4 inline-block text-accent hover:underline">
          Back to products
        </Link>
      </div>
    )
  }

  const rating = product.rating?.rate ?? 0
  const count = product.rating?.count ?? 0

  return (
    <div className="animate-fade-up space-y-10">
      <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
        <Link
          to="/products"
          className="inline-flex items-center gap-1 hover:text-accent"
        >
          <ArrowLeft size={14} />
          Products
        </Link>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
        <span>/</span>
        <span className="max-w-[200px] truncate text-[var(--text)]">
          {product.title}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-3xl border border-[var(--border)] bg-white p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-80 object-contain"
          />
        </div>

        <div>
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-zinc-950 capitalize">
            {product.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)]">
            {product.title}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.round(rating) ? 'currentColor' : 'none'}
                  className={i < Math.round(rating) ? '' : 'text-[var(--border)]'}
                />
              ))}
            </div>
            <span className="text-sm text-[var(--text-muted)]">
              ({count} reviews)
            </span>
          </div>

          <p className="mt-4 text-3xl font-bold text-accent">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            {product.description}
          </p>

          <div className="mt-6 flex gap-3">
            <Button className="flex-1" onClick={handleAdd}>
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
            <button
              type="button"
              onClick={() => toast.success('Saved to wishlist')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text)] transition hover:border-accent hover:text-accent cursor-pointer"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              { icon: Truck, label: 'Free Delivery' },
              { icon: ShieldCheck, label: 'Secure Pay' },
              { icon: RefreshCcw, label: 'Easy Returns' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--border)] p-3 text-center"
              >
                <item.icon size={16} className="mx-auto text-accent" />
                <p className="mt-1.5 text-[11px] font-medium text-[var(--text-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <Button className="mt-6 w-full" onClick={goNext}>
            Next
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {related.length > 0 ? (
        <section>
          <h2 className="mb-4 text-xl font-bold text-[var(--text)]">
            Related Products
          </h2>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </div>
  )
}
