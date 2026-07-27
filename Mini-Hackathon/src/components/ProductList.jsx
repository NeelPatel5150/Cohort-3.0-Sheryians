import ProductCard from './ProductCard'
import { useGetProductsQuery } from '../features/products/productsApi'
import { products as fallbackProducts } from '../data/products'

function ProductList() {
  // RTK Query hook — Display Data from API
  // data, isLoading, isError, isFetching, refetch sab built-in milte hain
  const { data, isLoading, isError, isFetching, refetch } = useGetProductsQuery()

  // Agar API fail ho jaye toh local fallback products dikhao (demo safe)
  const products = data ?? fallbackProducts
  const usingFallback = isError && !data

  return (
    <section>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Products</h2>
          <p className="mt-1 text-sm text-slate-500">
            {usingFallback
              ? 'API unavailable — showing local fallback products.'
              : 'Fetched with RTK Query from Fake Store API.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => refetch()}
          disabled={isFetching}
          className="self-start rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isFetching ? 'Refreshing...' : 'Refresh Products'}
        </button>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="aspect-[4/3] bg-slate-200" />
              <div className="space-y-3 p-4">
                <div className="h-4 w-3/4 rounded bg-slate-200" />
                <div className="h-5 w-1/3 rounded bg-slate-200" />
                <div className="h-10 w-full rounded-xl bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && (
        <>
          {usingFallback && (
            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Could not reach the API. Local products are shown so the cart demo
              still works. Try Refresh Products.
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default ProductList
