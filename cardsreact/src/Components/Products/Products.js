import React from "react";
import { Container, Card, Button, Row , Col} from "react-bootstrap";

function Products() {
  const products = [
    {
      id: 1,
      title: "Sony Walkman",
      description: "Details and specifications on Sony Walkman",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/walkman-1562006512.jpg?crop=0.784xw:1.00xh;0.0867xw,0&resize=480:*",
    },
    {
      id: 2,
      title: "Senheisser",
      description: "Details and specifications on Senheisser",
      img: "https://www.lifewire.com/thmb/JMMd4x0wj82Bf34vZpyggWK9Omo=/1500x1500/filters:no_upscale()/_hero_SQ_4LW4158338-1-28072892ce8c4fc18207f03be2f22369.jpg",
    },
    {
      id: 3,
      title: "Dr dre",
      description: "Details and specifications on Dr dre",
      img: "https://cdn1.smartprix.com/rx-ihvEiE8zH-w1200-h1200/beats-by-dr-dre-pro.jpg",
    },

  ];
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="success">BUY</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
