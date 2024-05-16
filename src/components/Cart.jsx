import { Container } from "react-bootstrap";

export const Cart = () => {
  const handleSubmit = () => {};
};

return (
  <Container className="mt-4">
    <h1>Productos</h1>
    {ItemList.map((i) => {
      return (
        <ul key={i.title}>
          <li>Producto: {i.title}</li>
          <li>Cantidad: {i.quantity}</li>
          <li>$ {i.price}</li>
        </ul>
      );
    })}
    <div>Total: {total()}</div>
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
  </Container>
);
