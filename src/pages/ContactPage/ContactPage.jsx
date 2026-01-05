import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [errores, setErrores] = useState({});

  const validarContacto = (e) => {
    const f = e.target;
    const err = {};

    if (f.nombre.value.trim() === "") err.nombre = "Campo obligatorio";
    if (f.email.value.trim() === "" || !f.email.value.includes("@"))
      err.email = "Email incorrecto";
    if (f.mensaje.value.trim() === "") err.mensaje = "Escribe un mensaje";

    setErrores(err);

    if (Object.keys(err).length > 0) {
      e.preventDefault();
      f[Object.keys(err)[0]].focus();
    }
  };

  return (
    <Container className="contact-page">
      <h1>Contacto</h1>

      <section className="author-box">
        <img src="/src/assets/author.jpg" className="author-photo" />
        <div>
          <p>
            <strong>Nombre:</strong> Tu Nombre
          </p>
          <p>
            <strong>Email:</strong> tuemail@email.com
          </p>
          <p>
            Esta web ha sido creada como práctica para mostrar la evolución
            histórica de los videojuegos, combinando diseño, multimedia y
            desarrollo web moderno.
          </p>
        </div>
      </section>

      <h2>Escríbenos</h2>

      <Form
        action="https://postman-echo.com/post"
        method="post"
        onSubmit={validarContacto}
      >
        <FloatingLabel label="Nombre" className="mb-3">
          <Form.Control name="nombre" />
          {errores.nombre && <div className="error">{errores.nombre}</div>}
        </FloatingLabel>

        <FloatingLabel label="Email" className="mb-3">
          <Form.Control name="email" />
          {errores.email && <div className="error">{errores.email}</div>}
        </FloatingLabel>

        <FloatingLabel label="Mensaje" className="mb-3">
          <Form.Control as="textarea" rows={4} name="mensaje" />
          {errores.mensaje && <div className="error">{errores.mensaje}</div>}
        </FloatingLabel>

        <Button type="submit" className="subscribe-btn">
          Enviar mensaje
        </Button>
      </Form>

      <div className="map-section">
        <h2>Dónde estamos</h2>
        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Universidad%20Francisco%20de%20Vitoria&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      <div
        className="fb-comments"
        data-href="https://tu-web-de-practica.com"
        data-width="100%"
        data-numposts="5"
      ></div>
    </Container>
  );
}

export default ContactPage;
