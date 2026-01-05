import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import "./SubsPage.css";

function Suscripcion() {
  const [errores, setErrores] = useState({});

  const validarNewsletter = (e) => {
    const f = e.target;
    const err = {};

    if (f.nombre.value.trim() === "") err.nombre = "Campo obligatorio";
    if (f.email.value.trim() === "" || !f.email.value.includes("@"))
      err.email = "Email incorrecto";
    if (f.direccion.value.trim() === "") err.direccion = "Campo obligatorio";
    if (f.telefono.value.trim() === "" || f.telefono.value.length !== 9)
      err.telefono = "Teléfono incorrecto";
    if (!f.noticias.checked)
      err.noticias = "Debes aceptar la suscripción";

    setErrores(err);

    if (Object.keys(err).length > 0) {
      e.preventDefault();
      f[Object.keys(err)[0]].focus();
    }
  };

  const validarContacto = (e) => {
    const f = e.target;
    const err = {};

    if (f.nombreContacto.value.trim() === "")
      err.nombreContacto = "Campo obligatorio";
    if (f.emailContacto.value.trim() === "" || !f.emailContacto.value.includes("@"))
      err.emailContacto = "Email incorrecto";
    if (f.mensaje.value.trim() === "")
      err.mensaje = "Escribe un mensaje";

    setErrores(err);

    if (Object.keys(err).length > 0) {
      e.preventDefault();
      f[Object.keys(err)[0]].focus();
    }
  };

  return (
    <Container className="suscripcion-page">

      <h1>Suscríbete a nuestra newsletter</h1>
      <p>Recibe novedades y curiosidades sobre la historia de los videojuegos.</p>

      <Form action="https://postman-echo.com/post" method="post" onSubmit={validarNewsletter}>

        <FloatingLabel label="Nombre y Apellidos" className="mb-3">
          <Form.Control name="nombre" />
          {errores.nombre && <div className="error">{errores.nombre}</div>}
        </FloatingLabel>

        <FloatingLabel label="Email" className="mb-3">
          <Form.Control name="email" />
          {errores.email && <div className="error">{errores.email}</div>}
        </FloatingLabel>

        <FloatingLabel label="Dirección" className="mb-3">
          <Form.Control name="direccion" />
          {errores.direccion && <div className="error">{errores.direccion}</div>}
        </FloatingLabel>

        <FloatingLabel label="Teléfono" className="mb-3">
          <Form.Control name="telefono" />
          {errores.telefono && <div className="error">{errores.telefono}</div>}
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Check
            name="noticias"
            label="Quiero recibir noticias y novedades"
          />
          {errores.noticias && <div className="error">{errores.noticias}</div>}
        </Form.Group>

        <Button type="submit" className="subscribe-btn">Enviar</Button>
      </Form>

      <hr className="section-divider" />

      <h1>Contáctanos</h1>
      <p>¿Tienes alguna duda o sugerencia? Escríbenos.</p>

      <Form action="https://postman-echo.com/post" method="post" onSubmit={validarContacto}>

        <FloatingLabel label="Nombre" className="mb-3">
          <Form.Control name="nombreContacto" />
          {errores.nombreContacto && <div className="error">{errores.nombreContacto}</div>}
        </FloatingLabel>

        <FloatingLabel label="Email" className="mb-3">
          <Form.Control name="emailContacto" />
          {errores.emailContacto && <div className="error">{errores.emailContacto}</div>}
        </FloatingLabel>

        <FloatingLabel label="Mensaje" className="mb-3">
          <Form.Control as="textarea" rows={4} name="mensaje" />
          {errores.mensaje && <div className="error">{errores.mensaje}</div>}
        </FloatingLabel>

        <Button type="submit" className="subscribe-btn">Enviar mensaje</Button>
      </Form>

      <div className="map-section">
        <h2>Dónde estamos</h2>
        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Universidad%20Francisco%20de%20Vitoria&output=embed"
          loading="lazy"
        ></iframe>
      </div>

    </Container>
  );
}

export default Suscripcion;
