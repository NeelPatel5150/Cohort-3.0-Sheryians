import { useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const subtotal = item.price * item.quantity

  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 rounded-lg object-cover"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="truncate text-sm font-semibold text-slate-900">
              {item.name}
            </h4>
            <p className="text-xs text-slate-500">${item.price.toFixed(2)} each</p>
          </div>

          <button
            type="button"
            onClick={() => dispatch(removeFromCart(item.id))}
            aria-label={`Remove ${item.name}`}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => dispatch(decreaseQuantity(item.id))}
              aria-label="Decrease quantity"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-bold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              −
            </button>
            <span className="min-w-6 text-center text-sm font-semibold text-slate-800">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => dispatch(increaseQuantity(item.id))}
              aria-label="Increase quantity"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-bold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              +
            </button>
          </div>

          <p className="text-sm font-bold text-emerald-700">
            ${subtotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
