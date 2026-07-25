import { useEffect, useState } from 'react'
import {
  getCategories,
  getProductById,
  getProducts,
  getProductsByCategory,
} from '../api/products'

export function useProducts(category = 'all') {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let alive = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data =
          category && category !== 'all'
            ? await getProductsByCategory(category)
            : await getProducts()
        if (alive) setProducts(data)
      } catch (err) {
        if (alive) setError(err.message || 'Failed to load products')
      } finally {
        if (alive) setLoading(false)
      }
    }

    load()
    return () => {
      alive = false
    }
  }, [category])

  return { products, loading, error }
}

export function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let alive = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await getProductById(id)
        if (alive) setProduct(data)
      } catch (err) {
        if (alive) setError(err.message || 'Failed to load product')
      } finally {
        if (alive) setLoading(false)
      }
    }

    if (id) load()
    return () => {
      alive = false
    }
  }, [id])

  return { product, loading, error }
}

export function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true

    getCategories()
      .then((data) => {
        if (alive) setCategories(data)
      })
      .catch(() => {
        if (alive) setCategories([])
      })
      .finally(() => {
        if (alive) setLoading(false)
      })

    return () => {
      alive = false
    }
  }, [])

  return { categories, loading }
}
