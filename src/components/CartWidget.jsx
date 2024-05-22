import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import cartImage from "../assets/CartWidget.png";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    <Link to="/Cart">
      <img src={cartImage} alt="Carrito de Compras" width={60} />
      <span>{totalQuantity}</span>
    </Link>
  );
};
