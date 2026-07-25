import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import ThemeToggle from '../components/ui/ThemeToggle'

const stats = [
  { value: '20K+', label: 'Products' },
  { value: '50K+', label: 'Users' },
  { value: '4.9★', label: 'Rating' },
]

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      login({ email, password })
      toast.success('Welcome back!')
      navigate('/home')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen auth-gradient">
      <div className="absolute right-4 top-4 z-10 md:right-8 md:top-8">
        <ThemeToggle />
      </div>

      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <section className="animate-fade-up">
          <Logo size="lg" to="/login" />

          <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Welcome back
          </p>
          <h1 className="mt-3 max-w-md text-4xl font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">
            Shop the future.{' '}
            <span className="text-accent">Today.</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
            Thousands of products, lightning-fast delivery, and prices that
            actually make sense.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[100px] rounded-xl border border-[var(--border)] bg-[var(--card)]/80 px-4 py-3 backdrop-blur-sm"
              >
                <p className="font-display text-xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-fade-up rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
          <h2 className="text-2xl font-bold text-[var(--text)]">Sign in</h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Enter your credentials to continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <Input
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="text-[var(--text-muted)] hover:text-[var(--text)] cursor-pointer"
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
              <ArrowRight size={16} />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="font-semibold text-accent hover:underline">
              Create one
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}
