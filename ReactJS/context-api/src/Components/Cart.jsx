import React from "react";

const Cart = ({ cartItems, onRemoveItem, onClearCart, onContinueShopping }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  const shipping = cartItems.length ? 12.0 : 0;

  const tax = subtotal * 0.08;

  const total = subtotal + shipping + tax;

  if (!cartItems.length) {
    return (
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="flex min-h-112 flex-col justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white sm:p-10">
            <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
              Cart
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your cart is empty.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Add products from the catalog to see them here. You can review
              items, remove them, and check out from this view.
            </p>
            <button
              type="button"
              onClick={onContinueShopping}
              className="mt-8 w-fit rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Continue shopping
            </button>
          </div>

          <div className="flex items-center justify-center bg-slate-50 p-8 sm:p-10">
            <div className="w-full max-w-sm rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-white">
                0
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                No items yet
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Pick any product card and press Add to Cart to fill this panel.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Shopping Cart
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {cartItems.length} item{cartItems.length > 1 ? "s" : ""}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClearCart}
            className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          >
            Clear cart
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {cartItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row"
            >
              <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-2xl bg-white p-3 sm:h-32 sm:w-32">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {item.category}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg font-bold text-slate-900">
                      ${item.price}
                    </p>
                  </div>

                  <p className="line-clamp-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm text-slate-500">
                    Rating{" "}
                    <span className="font-semibold text-slate-800">
                      {item.rating.rate}
                    </span>
                    <span className="mx-2 text-slate-300">|</span>
                    Sold{" "}
                    <span className="font-semibold text-slate-800">
                      {item.rating.count}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id, index)}
                    className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:border-rose-300 hover:bg-rose-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
          Order Summary
        </p>

        <div className="mt-6 space-y-4 rounded-3xl bg-white/5 p-5">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between text-base font-semibold text-white">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Proceed to checkout
        </button>

        <button
          type="button"
          onClick={onContinueShopping}
          className="mt-3 w-full rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Continue shopping
        </button>
      </aside>
    </section>
  );
};

export default Cart;
