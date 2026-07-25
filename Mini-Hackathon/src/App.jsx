import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  function toggleCart() {
    setIsCartOpen((prev) => !prev)
  }

  function closeCart() {
    setIsCartOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar isCartOpen={isCartOpen} onToggleCart={toggleCart} />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ProductList />
      </main>

      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </div>
  )
}

export default App
