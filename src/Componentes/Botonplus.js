import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';


function Botonplus() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    // Envio de formulario

    const [nombre, setNombre] = useState("");
    const [pista, setPista] = useState("");
    const [comentario, setComentario] = useState("");
    const [edad, setEdad] = useState("");
    const [pais, setPais] = useState("");

    //Subir imagen a servidor
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "mtb0144")
        data.append("cloud_name", "dx2kgjjmf")
        data.append("folder", "mtb_comentarios_fotos")
        fetch("  https://api.cloudinary.com/v1_1/dx2kgjjmf/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))
    }

    //const [imagen, setImagen] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/comentario', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: '',
                    nombre: nombre,
                    pista: pista,
                    comentario: comentario,
                    edad: edad,
                    pais: pais,
                    url_imagen: url,
                    createdAt: '',
                    updatedAt: '',
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setPista("");
                setComentario("");
                setEdad("");
                setPais("");
                setImage("");
                setUrl("");
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
        <>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agrega un comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Sube tu imagen</Form.Label>
                            <Form.Control type="file" onBlur={uploadImage} onChange={(e) => setImage(e.target.files[0])} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre" onChange={(e) => setNombre(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPista">
                            <Form.Label>Pista</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa la pista" onChange={(e) => setPista(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEdad">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu edad" onChange={(e) => setEdad(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPais">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu país" onChange={(e) => setPais(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Coment">
                            <Form.Label>Comentario</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setComentario(e.target.value)} />
                        </Form.Group>
                        <Button className="btnp" variant="success" type="submit" >
                            Agregar
                        </Button>
                        <div className="message"><div className="message">{message === "Comentario agregado con éxito" ? <p>{message}</p> : <p style={{ color: 'red' }}>{message}</p>}</div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <button onClick={() => handleShow('xl-down')} className="float">+</button>
        </>
    )
}

export { Botonplus }