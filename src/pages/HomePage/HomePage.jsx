import "./HomePage.css";
import Carousel from "./../../components/Carousel/Carousel";
import gamesImg from "./../../assets/vgames.jpg";
import questionImg from "./../../assets/question.jpg";
import glassImg from "./../../assets/lupa.jpg";

function HomePage() {
  return (
    <>
      <div className="main-hero">
        <Carousel />
      <div className="home-container">
        <section className="intro">
          <h1>La Historia de los Videojuegos</h1>
          <p>
            Desde los primeros píxeles en blanco y negro hasta los mundos
            abiertos hiperrealistas de hoy, los videojuegos han recorrido un
            camino impresionante. Esta web recopila los hitos más importantes
            que marcaron su evolución.
          </p>
        </section>

        <section className="highlights">
          <h2>Bienvenido</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <img src={questionImg} />
              <h3>Qué encontrarás aquí</h3>
              <p>
                Una visión clara y sencilla de cómo han evolucionado los
                videojuegos, con explicaciones directas y ejemplos fáciles de
                reconocer.
              </p>
            </div>

            <div className="feature-card">
              <img src={gamesImg} />
              <h3>Por qué importa</h3>
              <p>
                Los videojuegos han influido en cultura, tecnología y
                entretenimiento. Aquí verás el contexto para entender su impacto
                sin tecnicismos.
              </p>
            </div>

            <div className="feature-card">
              <img src={glassImg} />
              <h3>Cómo está organizada la web</h3>
              <p>
                Explora por secciones: panorámica general aquí en la Home y, en
                páginas dedicadas, el detalle cronológico, el hardware y los
                títulos representativos.
              </p>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}

export default HomePage;
