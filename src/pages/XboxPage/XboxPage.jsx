import "./../Consoles.css";
import xboxImg from "./../../assets/consoles/xbox.jpg";

import XBOX1 from "./../../assets/consoles/xbox1.jpg";
import XBOX360 from "./../../assets/consoles/xbox360.jpg";
import XBOXONE from "./../../assets/consoles/xboxone.jpg";
import XBOXSERIES from "./../../assets/consoles/xboxseries.jpg";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function XboxPage() {
  return (
    <div className="main-content console-page">
      <h1>Xbox</h1>
      <p className="console-subtitle">
        El ecosistema de gaming de Microsoft
      </p>

      <img src={xboxImg} className="console-hero" />

      <section className="console-text boxed-text">
        <p>
          Xbox debutó en 2001 como la apuesta de Microsoft por el mercado de las
          consolas, destacando desde el inicio por su potencia y enfoque en el
          juego online.
        </p>
        <p>
          Con servicios como Xbox Live y Game Pass, la marca ha evolucionado
          hacia un ecosistema que combina hardware, software y servicios
          digitales.
        </p>
      </section>

      <section className="console-list">
        <h2>Consolas destacadas</h2>

        <Row className="justify-content-center g-4">
          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={XBOX1} />
              <Card.Body>
                <Card.Title>Xbox</Card.Title>
                <Card.Text>2001</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={XBOX360} />
              <Card.Body>
                <Card.Title>Xbox 360</Card.Title>
                <Card.Text>2005</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={XBOXONE} />
              <Card.Body>
                <Card.Title>Xbox One</Card.Title>
                <Card.Text>2013</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={XBOXSERIES} />
              <Card.Body>
                <Card.Title>Xbox Series X | S</Card.Title>
                <Card.Text>2020</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default XboxPage;
