import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// RTK Query API slice — products Fake Store API se fetch hote hain
// Bonus: yeh createAsyncThunk + useEffect se better hai (caching, loading, refetch built-in)
export const productsApi = createApi({

  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  endpoints: (builder) => ({
    // GET /products — Display Data (products list)
    getProducts: builder.query({
      query: () => '/products',
      // API ka shape: { id, title, price, category, image, ... }
      // Hum apne cart ke liye { id, name, price, category, image } banate hain
      transformResponse: (response) =>
        response.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          category: product.category,
          image: product.image,
        })),
    }),
  }),
})

// Auto-generated hook — component mein useGetProductsQuery() call karo
export const { useGetProductsQuery } = productsApi
