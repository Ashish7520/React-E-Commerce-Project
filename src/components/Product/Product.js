import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Product.css";

const Product = (props) => {
  const productsArr = [
    {
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Album 4",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <h2>Music</h2>
          {productsArr.map((item) => (
            <Col md={6} key={item.title} style={{ padding: "20px" }}>
              <h3>{item.title}</h3>
              <img src={item.imageUrl} alt={item.title} />
              <Col></Col>
              <p className="price">${item.price}</p>
              <Button
                style={{ position: "relative", left: "300px" }}
                className="btn"
                variant="secondary"
              >
                Add Cart
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Product;
