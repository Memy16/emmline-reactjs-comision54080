import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ item }) => (
  <Card style={{ width: "18rem" }} className="d-inline-block m-2">
    <Card.Img variant="top" height="300" src={item.image} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>{item.descrption}</Card.Text>
      <Card.Text>Categoría: {item.categoryId}</Card.Text>
      <Card.Text>Precio: ${item.price} </Card.Text>
      <Card.Text>Stock disponible: {item.stock}</Card.Text>
      <Link to={`/item/${item.id}`}>
        <Button variant="primary">Ver Producto</Button>
      </Link>
    </Card.Body>
  </Card>
);
