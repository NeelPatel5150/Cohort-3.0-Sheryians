import { ArrowRight, ShoppingBag, X } from 'lucide-react'
import toast from 'react-hot-toast'
import { useCart } from '../../hooks/useCart'
import Button from '../ui/Button'
import CartItem from './CartItem'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  if (!isOpen) return null

  function handleCheckout() {
    if (!items.length) {
      toast.error('Your cart is empty')
      return
    }
    toast.success('Checkout coming soon!')
  }

  function handleClear() {
    clearCart()
    toast.success('Cart cleared')
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-[var(--overlay)] cursor-pointer"
        aria-label="Close cart"
        onClick={closeCart}
      />

      <aside className="animate-slide-in relative flex h-full w-full max-w-md flex-col border-l border-[var(--border)] bg-[var(--card)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-accent" />
            <h2 className="text-lg font-bold text-[var(--text)]">Cart</h2>
            {totalItems > 0 ? (
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-zinc-950">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            ) : null}
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-lg p-1.5 text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text)] cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <ShoppingBag size={36} className="text-[var(--text-muted)]" />
              <p className="text-sm text-[var(--text-muted)]">
                Your cart is empty
              </p>
            </div>
          ) : (
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        <div className="border-t border-[var(--border)] px-5 py-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-[var(--text-muted)]">Total</span>
            <span className="text-xl font-bold text-[var(--text)]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <Button className="w-full" onClick={handleCheckout}>
            Checkout
            <ArrowRight size={16} />
          </Button>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={handleClear}
              className="mt-3 w-full text-center text-sm text-[var(--text-muted)] hover:text-red-500 cursor-pointer"
            >
              Clear cart
            </button>
          ) : null}
        </div>
      </aside>
    </div>
  )
}
