import React from "react";

const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id, index) => {
    setCartItems((prev) =>
      prev.filter((item, itemIndex) => item.id !== id || itemIndex !== index),
    );
  };

  const clearCart = () => setCartItems([]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export default CartContext;
