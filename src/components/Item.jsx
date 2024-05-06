import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Card style={{ width: "18rem" }} className="d-inline-block m-2">
    <Card.Img variant="top" height="300" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Card.Text>{product.categoryId}</Card.Text>
      <Link to={`/item/${product.id}`}>
        <Button variant="primary">Ver Producto</Button>
      </Link>
    </Card.Body>
  </Card>
);
