import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Badge, Spinner } from "react-bootstrap";

const Details = () => {
  // Mi prendo parametro che ho messo nell'url
  const params = useParams();
  console.log(params);

  const [prodotto, setProdotto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://dummyjson.com/products/" + params.prodottoId
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);

        // Creo una costante per entrare in Search e dunque lavorare su array
        // const film = data.Search;
        // console.log(film);
        // Setto lo state passandogli i dati della chiamata
        /*           this.setState({
          film: [data],
          isLoading: false,
        }); */
        setProdotto(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={prodotto.thumbnail} />
              <Card.Body>
                <Card.Text>{prodotto.description}</Card.Text>
                <Card.Text>{prodotto.price}</Card.Text>
                <Card.Text>{prodotto.brand}</Card.Text>
                <Badge pill bg="primary">
                  Rating: {prodotto.rating}
                </Badge>
                <Badge className="ms-3" pill bg="warning">
                  Stock: {prodotto.stock}
                </Badge>
                <Badge className="ms-3" pill bg="info">
                  Category: {prodotto.category}
                </Badge>
              </Card.Body>
              {isLoading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  variant="danger"
                />
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
