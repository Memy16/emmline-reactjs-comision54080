import { useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, clearCart, total, getTotal } = useContext(CartContext);
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
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
          <h4>Subtotal: ${total()}</h4>
          <h3>Total: {total()}</h3>
          <div className="buttonsCart">
            <button className="buttonClearCart" onClick={() => clearCart()}>
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

/*
      {items?.length > 0 && (
        <form>
          <label>Nombre</label>
          <input type="text"></input>
          <label>Tel</label>
          <input type="number"></input>
          <label>E-mail</label>
          <input type="email"></input>
          <input type="button" value="Enviar" />
        </form>
      )}
    </div>
  );
};*/
