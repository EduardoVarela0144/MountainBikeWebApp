import React from 'react';
import { Columnas } from '../Componentes/Columnas';
import { Container } from '../Componentes/Container';
import { Divider } from '../Componentes/Divider';
import { Carousel } from '../Componentes/Carousel';
import { Footer } from '../Componentes/Footer';
import { Tarjetas } from '../Componentes/Tarjetas';
import { Tarjetasleft } from '../Componentes/Tarjetasleft';
import '../App.css';
import I1 from '../Image/WO.jpg';
import I2 from '../Image/Cultura.jpg';
import I3 from '../Image/Fiestas.jpg';
import { Navb } from '../Componentes/Navb';

function Inicio() {
  document.title = 'Inicio';
  return (
    <React.Fragment>
      <Navb/>
      <main>
        <Carousel />
        <Container>
          <Columnas />
          <Tarjetas
            title='¿Por qué Oaxaca?'
            text='Oaxaca es uno de los estados en el que predomina el relieve motañoso
            por lo que muchas de sus pistas son regalos de la naturaleza los cuales debido a la complejidad del terreno
            te exigiran al máximo como ciclista.'
            url={I1} />
          <Tarjetasleft
            title='Cultura'
            text='Oaxaca cuenta con bellos lugares y paisajes con los que podras divertirte en los ratos en los que no te encuentres rodando en los cerros.'
            url={I2} />
          <Tarjetas
            title='Fiestas'
            text='En cualquier epoca del año podrás encontrar distintas festividades que llenan a la ciudad de adornos y colores 
            por lo que si eres extranjero te encantará sumergirte en la cultura oaxaqueña.'
            url={I3} />
          <Divider />
          <Footer />
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Inicio;