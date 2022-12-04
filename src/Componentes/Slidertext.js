import Carousel from 'react-bootstrap/Carousel'
import Marcelo from '../Image/Marcelo_2.jpg';
import Peter from '../Image/Marcelo_1.jpg';
import Valentina from '../Image/Valentina.jpg';

function Slidertext() {
  return (

    <Carousel>
      <Carousel.Item style={{'height':"230px"}}  interval={1000}>
        <img className="bd-placeholder-img" width="100%" height="100%" alt='Marcelo' style={{ maxWidth: 'inherit', maxheight: 'inherit', height: 'inherit', width: 'inherit', objectFit: 'cover', filter: 'brightness(45%)' }} src={Marcelo} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

        <Carousel.Caption>
          <h1>Marcelo Gutiérrez</h1>
          <h6>CORREDOR PORFESIONAL DE DOWNHILL</h6>
          <p>"Una experiencia que no te puedes perder"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"230px"}}  interval={500}>
        <img className="bd-placeholder-img" width="100%" height="100%" alt='Peter' style={{ maxWidth: 'inherit', maxheight: 'inherit', height: 'inherit', width: 'inherit', objectFit: 'cover', filter: 'brightness(45%)' }} src={Peter} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

        <Carousel.Caption>
          <h1>Peter</h1>
          <p>"Increibles paisajes y pistas"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"230px"}} >
        <img className="bd-placeholder-img" width="100%" height="100%" alt='Valentina' style={{ maxWidth: 'inherit', maxheight: 'inherit', height: 'inherit', width: 'inherit', objectFit: 'cover', filter: 'brightness(45%)' }} src={Valentina} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

        <Carousel.Caption>
          <h1>Valentina</h1>
          <p>"Una experiencia inolvidable"</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export { Slidertext }

