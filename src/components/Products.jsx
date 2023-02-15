import { Card, Button, Container, Col, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  /*   state = {
    products: [],
  }; */
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /*   componentDidMount = () => {
    this.getData();
  };
 */

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (res.ok) {
        const data = await res.json();
        const prodotti = data.products;
        console.log(prodotti);
        /*         this.setState({
          products: prodotti,
        }); */
        setProducts(prodotti);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        {products.map((el) => {
          return (
            <Col md={2} key={el.id}>
              <Card>
                <Card.Img variant="top" src={el.thumbnail} />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.brand}</Card.Text>
                  <Button
                    onClick={() => {
                      navigate("/prodotto/" + el.id);
                    }}
                    variant="primary"
                  >
                    Vedi dettagli
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        {isLoading && (
          <Spinner as="span" animation="grow" size="sm" variant="danger" />
        )}
      </Row>
    </Container>
  );
};

export default Products;
