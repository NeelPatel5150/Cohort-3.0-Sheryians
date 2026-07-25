import { Link } from 'react-router-dom'
import {
  ArrowRight,
  HeartHandshake,
  Shield,
  Users,
  Zap,
} from 'lucide-react'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'

const stats = [
  { value: '20K+', label: 'Products' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Avg. Rating' },
  { value: '99%', label: 'On-time Delivery' },
]

const values = [
  {
    icon: Shield,
    title: 'Trust',
    text: 'Honest pricing and products that match what you see.',
  },
  {
    icon: Zap,
    title: 'Speed',
    text: 'From browse to doorstep without the unnecessary wait.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'Built for everyday shoppers who care about quality.',
  },
  {
    icon: HeartHandshake,
    title: 'Quality',
    text: 'We pick items worth keeping  not just worth clicking.',
  },
]

const team = [
  { name: 'Neel Patel', role: 'Founder', color: 'bg-accent' },
  { name: 'Aisha Khan', role: 'Product', color: 'bg-sky-500' },
  { name: 'Rohan Mehta', role: 'Engineering', color: 'bg-violet-500' },
  { name: 'Priya Shah', role: 'Design', color: 'bg-pink-500' },
]

export default function About() {
  return (
    <div className="animate-fade-up space-y-12">
      <section className="mx-auto max-w-2xl text-center">
        <div className="mb-5 flex justify-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-zinc-950">
            <Zap size={24} fill="currentColor" strokeWidth={0} />
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text)]">
          About <span className="text-accent">SkyMart</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
          We started SkyMart to make online shopping feel simple again
          cleaner UI, better picks, and checkout that doesn&apos;t fight you.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center"
          >
            <p className="text-2xl font-bold text-accent">{stat.value}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8">
        <h2 className="text-2xl font-bold text-[var(--text)]">Our Story</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
          <p>
            SkyMart began as a weekend project a storefront that looked good
            and actually loaded fast. Over time it grew into a full shopping
            experience with search, categories, and a cart that remembers you.
          </p>
          <p>
            We believe shopping online should feel calm. No cluttered banners,
            no confusing steps. Just products, clear prices, and a path to buy.
          </p>
          <p>
            Today we&apos;re focused on polish: better discovery, smoother
            checkout flows, and a theme that works day or night.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-[var(--text)]">
          What We Stand For
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
            >
              <item.icon size={20} className="text-accent" />
              <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-[var(--text)]">
          Meet the Team
        </h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center"
            >
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${member.color}`}
              >
                {member.name.charAt(0)}
              </span>
              <p className="mt-3 font-semibold text-[var(--text)]">
                {member.name}
              </p>
              <p className="text-sm text-[var(--text-muted)]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
        <Logo size="sm" to="/home" />
        <h2 className="mt-4 text-2xl font-bold text-[var(--text)]">
          Ready to shop?
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Explore thousands of products at unbeatable prices.
        </p>
        <Link to="/products" className="mt-6 inline-block">
          <Button>
            Browse Products
            <ArrowRight size={16} />
          </Button>
        </Link>
      </section>
    </div>
  )
}
