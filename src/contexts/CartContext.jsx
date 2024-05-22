// CartContext.jsx
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
    setTotal(totalPrice);
  };

  const addItem = (item, quantity) => {
    const isExists = cart.some((i) => i.id === item.id);
    if (isExists) {
      const updateItems = cart.map((i) => {
        if (i.item.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setCart(updateItems);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (itemId, quantityToRemove = 1) => {
    const updatedCart = cart
      .map((i) => {
        if (i.item.id === itemId) {
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

/*import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const isExists = cart.some((i) => i.item.id === item.id);
    if (isExists) {
      const updateItems = cart.map((i) => {
        if (i.item.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setCart(updateItems);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (itemId, quantityToRemove = 1) => {
    const updatedCart = cart
      .map((i) => {
        if (i.item.id === itemId) {
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
};*/
