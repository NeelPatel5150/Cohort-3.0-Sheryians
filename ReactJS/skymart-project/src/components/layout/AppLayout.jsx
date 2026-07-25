import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from '../cart/CartDrawer'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
