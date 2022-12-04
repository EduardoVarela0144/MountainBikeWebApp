import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

//Botones de calificación
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Rutasagrega(props) {


    // Envio de formulario

    const [nombre, setNombre] = useState("");


    //Subir imagen a servidor
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "mtb0144")
        data.append("cloud_name", "dx2kgjjmf")
        data.append("folder", "galeria")
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

    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/Ruta', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    url: url,
                    dificultad: value,
                    x: props.coordenadas.lat,
                    y: props.coordenadas.lng

                }),
            });
            if (res.status === 200) {
                setNombre("");
                setValue("");
                setImage("");
                setUrl("");
                setMessage("Ruta agregada con exito");
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                setMessage("Ocurrio un error");

            }
        } catch (err) {
            console.log(err);
        }
    };

    //Funciones de calificación
    const [value, setValue] = React.useState(2);


    return (
        <>

            <Form onSubmit={handleSubmit}>
                {/* <h2>{props.coordenadas.lat}</h2>
                <h2>{props.coordenadas.lng}</h2> */}

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Sube tu imagen</Form.Label>
                    <Form.Control type="file" onBlur={uploadImage} onChange={(e) => setImage(e.target.files[0])} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre del trail</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre del trail" onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Ingresa una calificación para la pista</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />

                </Box>
                <hr />
                <button style={{ width: '100%' }} className="btnp" variant="success" type="submit" >
                    Agregar
                </button>
                <div className="message">{message === "Ruta agregada con exito" ? <p>{message}</p> : <p style={{ color: 'red' }}>{message}</p>}</div>
            </Form>


        </>
    )
}
export { Rutasagrega }