import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice.toLocaleString());
  };

  const addItem = (item, quantity) => {
    const isExists = items.some((i) => i.id === item.id);
    if (isExists) {
      const updateItems = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setCart(updateCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (itemId, quantityToRemove = 1) => {
    const updatedCart = cart
      .map((i) => {
        if (i.id === itemId) {
          return {
            ...i,
            quantity: i.quantity - quantityToRemove,
          };
        }
        return i;
      })
      .filter((i) => i.quantity > 0);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clearCart, getTotal, total, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
