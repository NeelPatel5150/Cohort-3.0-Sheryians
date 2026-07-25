import { ShieldCheck, Truck, BadgeDollarSign, Star, Zap } from 'lucide-react'
import Hero from '../components/home/Hero'
import StatsRow from '../components/home/StatsRow'
import CategoryGrid from '../components/home/CategoryGrid'
import ProductList from '../components/home/ProductList'
import Spinner from '../components/ui/Spinner'
import { useCart } from '../hooks/useCart'
import { useCategories, useProducts } from '../hooks/useProducts'

const features = [
  { icon: Truck, title: 'Fast Delivery', text: 'Quick shipping on every order' },
  { icon: ShieldCheck, title: 'Secure Payments', text: 'Your data stays protected' },
  { icon: BadgeDollarSign, title: 'Best Prices', text: 'Deals that actually save money' },
]

export default function Home() {
  const { products, loading, error } = useProducts()
  const { categories } = useCategories()
  const { totalItems, totalPrice } = useCart()

  const topRated = [...products]
    .sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
    .slice(0, 5)

  const newArrivals = [...products].reverse().slice(0, 5)

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <p className="py-16 text-center text-sm text-red-500">{error}</p>
    )
  }

  return (
    <div className="animate-fade-up space-y-10">
      <Hero />

      <StatsRow
        cartCount={totalItems}
        cartValue={totalPrice}
        topCount={topRated.length}
        categoryCount={categories.length}
      />

      <CategoryGrid categories={categories} products={products} />

      <div className="grid gap-4 lg:grid-cols-2">
        <ProductList title="Top Rated" icon={Star} products={topRated} />
        <ProductList title="New Arrivals" icon={Zap} products={newArrivals} />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <f.icon size={20} className="text-accent" />
            <p className="mt-3 font-semibold text-[var(--text)]">{f.title}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
