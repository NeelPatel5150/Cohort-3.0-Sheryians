import { Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo({ size = 'md', to = '/' }) {
  const sizes = {
    sm: { icon: 14, box: 'h-7 w-7', text: 'text-base' },
    md: { icon: 16, box: 'h-8 w-8', text: 'text-lg' },
    lg: { icon: 20, box: 'h-10 w-10', text: 'text-xl' },
  }
  const s = sizes[size]

  return (
    <Link to={to} className="inline-flex items-center gap-2.5 no-underline">
      <span
        className={`${s.box} inline-flex items-center justify-center rounded-full bg-accent text-zinc-950`}
      >
        <Zap size={s.icon} fill="currentColor" strokeWidth={0} />
      </span>
      <span className={`${s.text} font-display font-bold tracking-tight text-[var(--text)]`}>
        SkyMart
      </span>
    </Link>
  )
}
