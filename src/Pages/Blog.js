import React from 'react';
import { Divider } from '../Componentes/Divider';
import { Container } from '../Componentes/Container';
import { Footer } from '../Componentes/Footer';
import { Comentarios } from '../Componentes/Comentarios';
import { Botonplus } from '../Componentes/Botonplus';
import { Navb } from '../Componentes/Navb';
function Blog() {


  document.title = 'Blog';
  return (
    <React.Fragment>
      <Navb />
      <main>
        <Container>
          <Divider />
          <Comentarios />
          <Divider />
          <Footer />
          <Botonplus />
        </Container>
      </main>

    </React.Fragment>
  )
}

export default Blog;