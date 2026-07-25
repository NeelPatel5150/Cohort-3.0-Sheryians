import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import Button from '../ui/Button'

function greeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function Hero() {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <section className="grid-bg relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            {greeting()}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
            Welcome back,{' '}
            <span className="text-accent">{firstName}!</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            Discover products you&apos;ll love  curated picks, fair prices, and
            delivery that doesn&apos;t keep you waiting.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/products">
              <Button>
                Shop Now
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="secondary">View All Products</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-4 py-3 backdrop-blur">
            <p className="text-sm font-semibold text-accent">
              20+ Products Available
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-4 py-3 backdrop-blur">
            <p className="text-sm font-medium text-[var(--text)]">
              Free Delivery on ₹999+
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
