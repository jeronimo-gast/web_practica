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
    </Container>
  );
}

export default Suscripcion;
