import { Component } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (res.ok) {
        const data = await res.json();
        const prodotti = data.products;
        console.log(prodotti);
        this.setState({
          products: prodotti,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="mt-4">
        <Row>
          {this.state.products.map((el) => {
            return (
              <Col md={2} key={el.id}>
                <Link to={"/prodotto/" + el.id}>
                  <Card>
                    <Card.Img variant="top" src={el.thumbnail} />
                    <Card.Body>
                      <Card.Title>{el.title}</Card.Title>
                      <Card.Text>{el.brand}</Card.Text>
                      <Button variant="primary">Vedi dettagli</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Products;
