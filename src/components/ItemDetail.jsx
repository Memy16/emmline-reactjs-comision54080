import Container from "react-bootstrap/Container";
import { useContext } from "react";

import { ItemCount } from "./ItemCount";
import { CartContext } from "./contexts/CartContext.jsx";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const add = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <Container className="mt-4">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <div>{"Stock ${product.stock}"}</div>
      <div>{"Precio ${product.price}"}</div>
      <ItemCount stock={product.stock} onAdd={add} />
    </Container>
  );
};
