import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logoImg from './../../assets/logo.png'
import erasIcon from './../../assets/icons/eras.png'
import gamesIcon from './../../assets/icons/games.png'
import consoleIcon from './../../assets/icons/console.png'
import psIcon from './../../assets/icons/ps.png'
import xboxIcon from './../../assets/icons/xbox.png'
import nintendoIcon from './../../assets/icons/nintendo.png'
import './Navbar.css';

function Example() {
  return (
    <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="navbar-logo">
          <img src={logoImg} alt="VideoGames Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/eras" className="nav-link">
              <img src={erasIcon} className="nav-icon" /> Eras
            </Nav.Link>
            <Nav.Link href="/juegos" className="nav-link">
              <img src={gamesIcon} className="nav-icon" /> Juegos
            </Nav.Link>
            <NavDropdown title={<span><img src={consoleIcon} className="nav-icon" /> Consolas</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/playstation">
                <img src={psIcon} className="nav-icon" /> PlayStation
              </NavDropdown.Item>
              <NavDropdown.Item href="/xbox">
                <img src={xboxIcon} className="nav-icon" /> Xbox
              </NavDropdown.Item>
              <NavDropdown.Item href="/nintendo">
                <img src={nintendoIcon} className="nav-icon" /> Nintendo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Button href="/suscripcion" className="subscribe-btn">Suscribirse</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Example;
