import { useSelector } from 'react-redux'

function Navbar({ isCartOpen, onToggleCart }) {
  const items = useSelector((state) => state.cart.items)
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-sm">
            SC
          </span>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              ShopCart
            </h1>
            <p className="hidden text-xs text-slate-500 sm:block">
              Redux Toolkit Demo Store
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggleCart}
          aria-label="Toggle cart"
          className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H7" />
          </svg>

          {totalCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-semibold text-white">
              {totalCount}
            </span>
          )}

          <span className="sr-only">
            {isCartOpen ? 'Close cart' : 'Open cart'}
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
