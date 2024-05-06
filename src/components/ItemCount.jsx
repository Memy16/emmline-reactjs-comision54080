import { onChildAdded } from "firebase/database";
import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => -1);
  };
  const handleIncrease = () => {
    if (stock > quantity) setQuantity((prev) => +1);
  };
  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };
  return (
    <div>
      <div
        style={{ padding: "0 15px", color: "pink", fontWeight: "bold" }}
        onClick={handleDecrease}
      >
        -
      </div>
      <input type="number" value={count} readOnly />
      <div
        style={{ padding: "0 15px", color: "pink", fontWeight: "bold" }}
        onClick={handleIncrease}
      >
        +
      </div>
      <button type="button" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
