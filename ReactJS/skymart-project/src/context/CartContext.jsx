import { createContext, useMemo, useState } from 'react'
import { getItem, setItem } from '../utils/storage'

export const CartContext = createContext(null)

const CART_KEY = 'skymart_cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => getItem(CART_KEY, []))
  const [isOpen, setIsOpen] = useState(false)

  function persist(next) {
    setItems(next)
    setItem(CART_KEY, next)
  }

  function addItem(product, qty = 1) {
    const next = [...items]
    const index = next.findIndex((item) => item.id === product.id)

    if (index >= 0) {
      next[index] = {
        ...next[index],
        qty: next[index].qty + qty,
      }
    } else {
      next.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        qty,
      })
    }

    persist(next)
    setIsOpen(true)
  }

  function removeItem(id) {
    persist(items.filter((item) => item.id !== id))
  }

  function updateQty(id, qty) {
    if (qty < 1) {
      removeItem(id)
      return
    }
    persist(
      items.map((item) => (item.id === id ? { ...item, qty } : item))
    )
  }

  function clearCart() {
    persist([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      updateQty,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [items, isOpen, totalItems, totalPrice]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
