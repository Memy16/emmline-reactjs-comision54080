import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { db } from "../main";
import { addDoc, collection } from "firebase/firestore";
import { Form, Spinner } from "react-bootstrap";

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderld, setOrderld] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    if (!name || !phone || !email || cart.length === 0) {
      console.error("Sus datos estan incompletos para crear la orden");
      return;
    }

    setLoading(true);
    try {
      const ordersRef = collection(db, "orders");

      const newOrderRef = await addDoc(ordersRef, {
        client: { name, phone, email },
        items: cart.map(({ item, quantity }) => ({
          id: item.id,
          title: item.title,
          quantity,
          price: item.price,
        })),
        total,
        date: new Date().toISOString(),
      });

      setTimeout(() => setLoading(false), 2000);

      setOrderld(newOrderRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creando orden:", error);
      setLoading(false);
    }
  };

  return (
    <div className="checkoutSection">
      {loading && (
        <div className="overlay d-flex flex-column">
          <p className="loadingCheckout">Estamos cargando su compra :)</p>
          {""}
          <Spinner animation="border" variant="danger" />
        </div>
      )}
      {orderld && (
        <div
          className="overlay d-flex flex-column"
          onClick={() => setOrderld("")}
        >
          Order ID: {orderld} <p>¡Gracias por su compra!</p>
        </div>
      )}
      <Form
        className="formCheckout"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          createOrder({
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
          });
        }}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Teléfono: </Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su número de teléfono"
            name="phone"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            name="email"
            required
          />
        </Form.Group>

        <button className="buttonForm" type="submit" disabled={loading}>
          Comprar
        </button>
      </Form>
      <div className="sectionCartFinal">
        {cart.map(({ item, quantity }) => (
          <div key={item.id} className="d-flex gap-3">
            <p>{item.title}</p>
            <p>Cantidad: {quantity}</p>
          </div>
        ))}
        <h2 className="d-flex justify-content-end">Total: ${total} </h2>
      </div>
    </div>
  );
};
