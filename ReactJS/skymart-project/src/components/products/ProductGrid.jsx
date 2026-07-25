import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return (
      <p className="py-16 text-center text-sm text-[var(--text-muted)]">
        No products found.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
