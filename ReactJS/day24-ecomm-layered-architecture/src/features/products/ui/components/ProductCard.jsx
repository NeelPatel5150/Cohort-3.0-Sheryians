import { BadgePercent, ShoppingCart, Star } from "lucide-react";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const ProductCard = ({ product }) => {
  if (!product) return null;

  const ratingValue = Number(product.rating ?? 0);
  const rating = Number.isFinite(ratingValue) ? ratingValue : 0;
  const stars = Array.from(
    { length: 5 },
    (_, index) => index < Math.round(rating),
  );
  const image = product.thumbnail || product.images?.[0];
  const discount = Math.max(0, Math.round(product.discountPercentage ?? 0));

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">
      <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-amber-50 via-white to-slate-100">
        <img
          src={image}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-slate-950/90 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
            {product.category}
          </span>
          {discount > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-rose-500/25">
              <BadgePercent size={13} />
              {discount}% off
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {product.brand}
              </p>
              <h3 className="mt-1 line-clamp-2 text-lg font-bold leading-tight text-slate-900">
                {product.title}
              </h3>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-right">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                Stock
              </p>
              <p className="text-sm font-bold text-emerald-800">
                {product.stock}
              </p>
            </div>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Price
            </p>
            <p className="text-2xl font-black text-slate-950">
              {money.format(product.price ?? 0)}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {stars.map((filled, index) => (
              <Star
                key={index}
                size={16}
                className={
                  filled ? "fill-amber-400 text-amber-400" : "text-slate-300"
                }
              />
            ))}
            <span className="ml-1 text-sm font-semibold text-slate-600">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
          <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
            Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
