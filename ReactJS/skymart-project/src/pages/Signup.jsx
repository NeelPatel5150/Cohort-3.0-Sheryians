import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import ThemeToggle from '../components/ui/ThemeToggle'

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function strength(password) {
    let score = 0
    if (password.length >= 6) score++
    if (/[A-Z]/.test(password) || /[0-9]/.test(password)) score++
    if (password.length >= 10 || /[^A-Za-z0-9]/.test(password)) score++
    return score
  }

  const score = strength(form.password)
  const labels = ['Weak', 'Fair', 'Medium', 'Strong']

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirm) {
      toast.error('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      signup({
        name: form.name,
        email: form.email,
        password: form.password,
      })
      toast.success('Account created!')
      navigate('/home')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center auth-gradient px-5 py-12">
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md animate-fade-up">
        <div className="mb-8 flex justify-center">
          <Logo size="lg" to="/signup" />
        </div>

        <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
          <h1 className="text-2xl font-bold text-[var(--text)]">
            Create account
          </h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Join SkyMart and start shopping.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input
              placeholder="Full name"
              icon={User}
              value={form.name}
              onChange={update('name')}
              required
              autoComplete="name"
            />
            <Input
              type="email"
              placeholder="Email address"
              icon={Mail}
              value={form.email}
              onChange={update('email')}
              required
              autoComplete="email"
            />
            <div>
              <Input
                type={showPass ? 'text' : 'password'}
                placeholder="Password (min 6 chars)"
                icon={Lock}
                value={form.password}
                onChange={update('password')}
                required
                minLength={6}
                autoComplete="new-password"
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
              {form.password ? (
                <div className="mt-2">
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((level) => (
                      <span
                        key={level}
                        className={`h-1.5 flex-1 rounded-full ${
                          score >= level ? 'bg-accent' : 'bg-[var(--border)]'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {labels[score]}
                  </p>
                </div>
              ) : null}
            </div>
            <Input
              type="password"
              placeholder="Confirm password"
              icon={Lock}
              value={form.confirm}
              onChange={update('confirm')}
              required
              autoComplete="new-password"
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Creating...' : 'Create Account'}
              <ArrowRight size={16} />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-accent hover:underline">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}
