const ProductCard = ({ product }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.9)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
          {product.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-sm font-medium text-slate-100">
          ★ {product.rating}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-white">
              {product.title}
            </h3>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-sm font-semibold text-emerald-400">
              -{product.discountPercentage}%
            </span>
          </div>
          <p className="line-clamp-2 text-sm leading-6 text-slate-400">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Starting at
            </p>
            <p className="text-2xl font-bold text-white">${product.price}</p>
          </div>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            View product
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
