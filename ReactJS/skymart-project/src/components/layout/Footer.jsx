import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center lg:px-8">
        <Logo size="sm" to="/home" />
        <p className="text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} SkyMart • Built with React + Context + Axios
        </p>
      </div>
    </footer>
  )
}
