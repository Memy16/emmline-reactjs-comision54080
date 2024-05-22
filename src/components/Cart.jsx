// Cart.jsx
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, clearCart, getTotal, total } = useContext(CartContext);

  useEffect(() => {
    getTotal();
  }, [cart, getTotal]);

  return (
    <div className="mt-4">
      {cart.length === 0 ? (
        <>
          <h2>El carrito se encuentra vacío</h2>
          <Link to={"/"}>
            <button className="buttonCart">Inicio</button>
          </Link>
        </>
      ) : (
        <>
          {cart.map((p, index) => (
            <CartItem key={index} {...p} />
          ))}
          <h4>Total: ${total}</h4>
          <div className="buttonsCart">
            <button className="buttonClearCart" onClick={clearCart}>
              Vaciar carrito
            </button>
            <Link to={"/Checkout"}>
              <button className="buttonFinish">Terminar compra</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
