import { NavLink, useNavigate } from 'react-router-dom'
import { LogOut, ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'

const links = [
  { to: '/home', label: 'Home' },
  { to: '/products', label: 'Shop' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const { totalItems, openCart } = useCart()
  const navigate = useNavigate()

  const initial = user?.name?.charAt(0)?.toUpperCase() || 'U'

  function handleLogout() {
    logout()
    toast.success('Logged out')
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-accent'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <div className="hidden items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] py-1.5 pr-3 pl-1.5 sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-xs font-bold text-zinc-950">
                {initial}
              </span>
              <span className="max-w-[120px] truncate text-xs font-semibold uppercase tracking-wide text-[var(--text)]">
                {user.name}
              </span>
            </div>
          ) : null}

          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--text)] transition hover:border-accent hover:text-accent cursor-pointer"
            aria-label="Open cart"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 ? (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-zinc-950">
                {totalItems}
              </span>
            ) : null}
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--text)] transition hover:border-red-500 hover:text-red-500 cursor-pointer"
            aria-label="Log out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-1 border-t border-[var(--border)] px-5 py-2 md:hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `rounded-lg px-3 py-1.5 text-sm font-medium ${
                isActive ? 'text-accent' : 'text-[var(--text-muted)]'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
