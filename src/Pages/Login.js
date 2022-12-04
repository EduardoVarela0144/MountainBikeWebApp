import React from 'react';
import { Container } from '../Componentes/Container';
import { Iniciars } from '../Componentes/Iniciars';

function Login() {
  document.title = 'Login';

  return (
    <React.Fragment>
      <main style={{backgroundImage:'url("https://thumbs.dreamstime.com/b/mountains-vector-mountain-range-silhouette-isolated-illustration-129779416.jpg")',backgroundRepeat: 'no-repeat'
    ,backgroundPosition: 'center',backgroundAttachment:'fixed',objectFit:'cover'
    }}>
        <Container>
          <br />
          <Iniciars />
   
        </Container >
      </main>
    </React.Fragment>
  )

}


export default Login;