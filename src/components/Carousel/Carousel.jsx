import Carousel from 'react-bootstrap/Carousel';
import slide1 from './../../assets/evolution.png';
import slide2 from './../../assets/games.jpg';
import slide3 from './../../assets/legends.png';
import './Carousel.css';

function CarouselComponent(){
  return(
    <Carousel className="home-carousel">
      <Carousel.Item>
        <img className="d-block w-100 carousel-img" src={slide1} />
        <Carousel.Caption>
          <h1>La Historia de los Videojuegos</h1>
          <h3>De los píxeles al hiperrealismo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-img" src={slide2} />
        <Carousel.Caption>
          <h1>Consolas Icónicas</h1>
          <h3>El hardware que marcó generaciones</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-img" src={slide3} />
        <Carousel.Caption>
          <h1>Juegos Legendarios</h1>
          <h3>Títulos que cambiaron la industria</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
