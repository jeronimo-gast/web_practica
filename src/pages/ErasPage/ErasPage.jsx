import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ErasPage.css';

import eraImg1 from './../../assets/eras/arcade.jpg';
import eraImg2 from './../../assets/eras/hd.jpg';

function ErasPage(){
  return(
    <Container className="eras-page">
      <h1>Las Eras de los Videojuegos</h1>

      <Row className="era-block">
        <Col lg={6}>
          <img src={eraImg1} className="era-media" />
        </Col>
        <Col lg={6} className="era-text">
          <h3>Era Arcade y 8-bit</h3>
          <p>
            Los primeros videojuegos se caracterizaban por mecánicas simples,
            gráficos limitados y una fuerte presencia en salones recreativos.
          </p>
        </Col>
      </Row>

      <Row className="era-block">
        <Col lg={6}>
          <div className="ratio ratio-16x9">
            <video src="/videos/3d.mp4" autoPlay muted loop />
          </div>
        </Col>
        <Col lg={6} className="era-text">
          <h3>La llegada del 3D</h3>
          <p>
            La transición al 3D marcó un antes y un después en la forma de jugar,
            permitiendo mundos más complejos y narrativas más profundas.
          </p>
        </Col>
      </Row>

      <Row className="era-block">
        <Col lg={6}>
          <img src={eraImg2} className="era-media" />
        </Col>
        <Col lg={6} className="era-text">
          <h3>Era HD y online</h3>
          <p>
            La alta definición y la conectividad online transformaron los videojuegos
            en experiencias sociales y persistentes.
          </p>
        </Col>
      </Row>

      <Row className="era-block">
        <Col lg={6}>
          <div className="ratio ratio-16x9">
            <video src="/videos/today.mp4" autoPlay muted loop />
          </div>
        </Col>
        <Col lg={6} className="era-text">
          <h3>La era actual</h3>
          <p>
            Hoy los videojuegos combinan realismo, accesibilidad y tecnología
            avanzada para crear experiencias inmersivas.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ErasPage;
