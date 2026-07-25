import { Package, Star, Tag, TrendingUp } from 'lucide-react'

export default function StatsRow({ cartCount, cartValue, topCount, categoryCount }) {
  const cards = [
    {
      icon: Package,
      value: cartCount,
      label: 'Cart Items',
      hint: 'In your bag',
    },
    {
      icon: TrendingUp,
      value: `$${cartValue.toFixed(2)}`,
      label: 'Cart Value',
      hint: 'Ready to checkout',
    },
    {
      icon: Star,
      value: topCount,
      label: 'Top Products',
      hint: 'Highly rated',
    },
    {
      icon: Tag,
      value: categoryCount,
      label: 'Categories',
      hint: 'To explore',
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4"
        >
          <card.icon size={18} className="text-accent" />
          <p className="mt-3 text-2xl font-bold text-[var(--text)]">
            {card.value}
          </p>
          <p className="text-sm font-medium text-[var(--text)]">{card.label}</p>
          <p className="text-xs text-[var(--text-muted)]">{card.hint}</p>
        </div>
      ))}
    </div>
  )
}
