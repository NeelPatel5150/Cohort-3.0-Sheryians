import { products } from '../data/products'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Products</h2>
        <p className="mt-1 text-sm text-slate-500">
          Browse our collection and add items to your cart.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
