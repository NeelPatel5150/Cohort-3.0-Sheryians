import { Minus, Plus, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { useCart } from '../../hooks/useCart'

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart()

  function handleRemove() {
    removeItem(item.id)
    toast.success('Removed from cart')
  }

  return (
    <div className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-3">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[var(--text)]">
          {item.title}
        </p>
        <p className="mt-0.5 text-sm font-bold text-accent">
          ${item.price.toFixed(2)}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)]">
            <button
              type="button"
              onClick={() => updateQty(item.id, item.qty - 1)}
              className="flex h-7 w-7 items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="min-w-5 text-center text-sm font-medium">
              {item.qty}
            </span>
            <button
              type="button"
              onClick={() => updateQty(item.id, item.qty + 1)}
              className="flex h-7 w-7 items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="text-red-500 hover:text-red-400 cursor-pointer"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
