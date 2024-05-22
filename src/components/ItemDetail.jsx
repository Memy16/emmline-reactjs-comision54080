import { Card, Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";

import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ id, title, description, price, image, stock }) => {
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    const item = {
      id,
      title,
      price,
    };
    addItem(item, quantity);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={7}>
          <Card>
            <Card.Img src={image} alt={title} />
          </Card>
        </Col>
        <Col md={5}>
          <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Precio: ${price.toLocaleString()}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
