import "./../Consoles.css";
import psImg from "./../../assets/consoles/playstation.png";

import PS1 from "./../../assets/consoles/ps1.jpg";
import PS2 from "./../../assets/consoles/ps2.jpg";
import PS3 from "./../../assets/consoles/ps3.jpg";
import PS4 from "./../../assets/consoles/ps4.jpg";
import PS5 from "./../../assets/consoles/ps5.jpg";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PlayStationPage() {
  return (
    <div className="main-content console-page">
      <h1>PlayStation</h1>
      <p className="console-subtitle">
        La revolución del gaming moderno de Sony
      </p>

      <img src={psImg} className="console-hero" />

      <section className="console-text boxed-text">
        <p>
          PlayStation debutó en 1994 y marcó un antes y un después en la
          industria al apostar por el CD-ROM y una fuerte orientación a juegos
          3D.
        </p>
        <p>
          A lo largo de sus generaciones, Sony ha definido estándares en
          narrativa, gráficos y experiencias cinematográficas.
        </p>
      </section>

      <section className="console-list">
        <h2>Consolas destacadas</h2>

        <Row className="justify-content-center g-4">
          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={PS1} />
              <Card.Body>
                <Card.Title>PlayStation</Card.Title>
                <Card.Text>1994</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={PS2} />
              <Card.Body>
                <Card.Title>PlayStation 2</Card.Title>
                <Card.Text>2000</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={PS3} />
              <Card.Body>
                <Card.Title>PlayStation 3</Card.Title>
                <Card.Text>2006</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={PS4} />
              <Card.Body>
                <Card.Title>PlayStation 4</Card.Title>
                <Card.Text>2013</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={PS5} />
              <Card.Body>
                <Card.Title>PlayStation 5</Card.Title>
                <Card.Text>2020</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default PlayStationPage;
