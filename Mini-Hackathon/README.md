# ShopCart — Mini E-commerce (Hackathon Phase 3)

React + Vite + Redux Toolkit + Tailwind CSS shopping cart demo.

Products are fetched with **RTK Query** from [Fake Store API](https://fakestoreapi.com). Local products are used only as a fallback if the API fails.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Hackathon CRUD mapping

| Requirement | How this app does it |
|-------------|----------------------|
| **Display Data** | Product list via RTK Query (`useGetProductsQuery`) |
| **Add Data** | `addToCart` — new item in cart |
| **Update Data** | `increaseQuantity` / `decreaseQuantity` |
| **Delete Data** | `removeFromCart` + `clearCart` |
| **Redux Toolkit** | `configureStore`, `createSlice`, Provider, hooks, Immer, DevTools |

## Flow

```text
Product Listing (RTK Query)
      ↓
Add to Cart
      ↓
Redux Store (cart slice)
      ↓
Cart Sidebar
      ↓
Increase / Decrease Quantity
      ↓
Remove Product
      ↓
Calculate Total
```

## Redux concepts used

- `configureStore()`
- `createSlice()`
- `Provider`
- `useSelector()` / `useDispatch()`
- Actions, Reducers, Payload
- Immer (built into RTK slices)
- Redux DevTools (via `configureStore`)
- **Bonus:** RTK Query (`createApi`, `fetchBaseQuery`, `useGetProductsQuery`)

## Learn more

- **Redux Toolkit poori detailed notes (Hinglish):** [REDUX_TOOLKIT_NOTES.md](./REDUX_TOOLKIT_NOTES.md)
- **Project how-it-works (Hinglish):** [HOW_IT_WORKS.md](./HOW_IT_WORKS.md)
