import api from './axios'

export async function getProducts() {
  const { data } = await api.get('/products')
  return data
}

export async function getProductById(id) {
  const { data } = await api.get(`/products/${id}`)
  return data
}

export async function getCategories() {
  const { data } = await api.get('/products/categories')
  return data
}

export async function getProductsByCategory(category) {
  const { data } = await api.get(`/products/category/${category}`)
  return data
}
