import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

function ProductCard({ product }) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addToCart(product))
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
          <p className="mt-1 text-lg font-bold text-emerald-700">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
