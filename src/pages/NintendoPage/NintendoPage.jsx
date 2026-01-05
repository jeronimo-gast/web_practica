import "./../Consoles.css";
import nintendoImg from "./../../assets/consoles/nintendo.png";

import NES from "./../../assets/consoles/nes.jpg";
import SNES from "./../../assets/consoles/snes.jpg";
import N64 from "./../../assets/consoles/n64.jpg";
import GC from "./../../assets/consoles/gamecube.jpg";
import Wii from "./../../assets/consoles/wii.jpg";
import Switch from "./../../assets/consoles/switch.jpg";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NintendoPage() {
  return (
    <div className="main-content console-page">
      <h1>Nintendo</h1>
      <p className="console-subtitle">
        Creatividad, innovación y diversión para todas las edades
      </p>

      <img src={nintendoImg} className="console-hero" />

      <section className="console-text boxed-text">
        <p>
          Nintendo es una de las compañías más influyentes de la historia del
          videojuego, destacando por su enfoque en la jugabilidad, la innovación
          y personajes icónicos.
        </p>
        <p>
          A lo largo de décadas, ha redefinido la forma de jugar con consolas
          únicas y experiencias accesibles para todo tipo de público.
        </p>
      </section>

      <section className="console-list">
        <h2>Consolas destacadas</h2>

        <Row className="justify-content-center g-4">
          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={NES} />
              <Card.Body>
                <Card.Title>NES</Card.Title>
                <Card.Text>1983</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={SNES} />
              <Card.Body>
                <Card.Title>Super Nintendo</Card.Title>
                <Card.Text>1990</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={N64} />
              <Card.Body>
                <Card.Title>Nintendo 64</Card.Title>
                <Card.Text>1996</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={GC} />
              <Card.Body>
                <Card.Title>GameCube</Card.Title>
                <Card.Text>2001</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={Wii} />
              <Card.Body>
                <Card.Title>Wii</Card.Title>
                <Card.Text>2006</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="console-card">
              <Card.Img variant="top" src={Switch} />
              <Card.Body>
                <Card.Title>Nintendo Switch</Card.Title>
                <Card.Text>2017</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default NintendoPage;
