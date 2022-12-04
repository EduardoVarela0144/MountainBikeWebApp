import React, { useState } from 'react';
import '../Css/Contacto.css';

function Formulario() {
    // Envio de formulario

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [comentario, setComentario] = useState("");
    const [pais, setPais] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/contacto', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                    nombre: nombre,
                    apellidos: apellidos,
                    comentarios: comentario,
                    pais: pais,

                }),
            });
            if (res.status === 200) {
                setNombre("");
                setApellidos("");
                setComentario("");

                setPais("");

                setMessage("Comentario agregado con éxito");
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                setMessage("Ocurrio un error");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <React.Fragment>
            <h3>Contacto</h3><br></br>
            <div className="container_formulario">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">Nombre</label>
                    <input type="text" id="fname" name="firstname" placeholder="Tu nombre" onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="lape">Apellidos</label>
                    <input type="text" id="lape" name="lastname" placeholder="Tus apellidos" onChange={(e) => setApellidos(e.target.value)} />

                    <label htmlFor="country">País</label>
                    <input type="text" id="lpais" name="pais" placeholder="Tu País" onChange={(e) => setPais(e.target.value)} />
                    <label htmlFor="subject">Comentarios</label>
                    <textarea id="subject" name="subject" placeholder="Escribe Algo" style={{ height: '200px' }} onChange={(e) => setComentario(e.target.value)}></textarea>
                    <input type="submit" value="Enviar" style={{ backgroundColor: '#3DC814' }} />
                    <div className="message"><div className="message">{message === "Comentario agregado con éxito" ? <p>{message}</p> : <p style={{ color: 'red' }}>{message}</p>}</div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export { Formulario };