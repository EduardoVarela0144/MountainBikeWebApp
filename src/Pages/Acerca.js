import React from 'react';
import { Container } from '../Componentes/Container';
import { Divider } from '../Componentes/Divider';
import { Footer } from '../Componentes/Footer';
import { Formulario } from '../Componentes/Formulario';
import { Slidertext } from '../Componentes/Slidertext';
import { Navb } from '../Componentes/Navb';

function Acerca() {
  document.title = 'Acerca';
  return (
    <React.Fragment>
      <Navb />
      <main>
        <Container>
          <hr style={{ margin: '3.44rem 0' }}></hr>
          <Slidertext />
          <Formulario />
          <Divider />
          <Footer />
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Acerca;
