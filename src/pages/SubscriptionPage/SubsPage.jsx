import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './SubsPage.css';

function Suscripcion(){
  const [errores,setErrores]=useState({});
    const validar=e=>{
    const f=e.target;
    const err={};

    if(f.nombre.value.trim()==="") err.nombre="Campo obligatorio";

    if(f.email.value.trim()==="" || !f.email.value.includes("@")) err.email="Email incorrecto";

    if(f.direccion.value.trim()==="") err.direccion="Campo obligatorio";

    if(f.telefono.value.trim()==="" || f.telefono.value.length!==9) err.telefono="Teléfono incorrecto";

    if(!f.noticias.checked) err.noticias="Debes aceptar la suscripción";

    setErrores(err);

    if(Object.keys(err).length>0){
        e.preventDefault();
        f[Object.keys(err)[0]].focus();
    }
};
  return(
    <Container className="suscripcion-page">
      <h1>Suscríbete a nuestras noticias</h1>
      <p>Recibe novedades y curiosidades sobre la historia de los videojuegos.</p>
      <Form action="https://postman-echo.com/post" method="post" onSubmit={validar}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y Apellidos</Form.Label>
          <Form.Control name="nombre" />
          {errores.nombre&&<div className="error">{errores.nombre}</div>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" />
          {errores.email&&<div className="error">{errores.email}</div>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control name="direccion" />
          {errores.direccion&&<div className="error">{errores.direccion}</div>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control name="telefono" />
          {errores.telefono&&<div className="error">{errores.telefono}</div>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check name="noticias" label="Quiero recibir noticias y novedades" />
          {errores.noticias&&<div className="error">{errores.noticias}</div>}
        </Form.Group>
        <Button type="submit" className="subscribe-btn">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Suscripcion;
