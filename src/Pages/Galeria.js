import React, { useState } from 'react';
import { Divider } from '../Componentes/Divider';
import { Container } from '../Componentes/Container';
import { Footer } from '../Componentes/Footer';
//import { useState } from "react";
import { Navb } from '../Componentes/Navb';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'


function Galeria() {
    document.title = 'Galeria';

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
                handleSubmit()
            })
            .catch(err => console.log(err))
        

    }
    let handleSubmit = async () => {

        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/galeria', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    src: url
                }),
            });
            if (res.status === 200) {

                setImage("");
                setUrl("");
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error")
                Swal.fire({
                    icon: 'error',
                    title: 'Debes seleccionar el icono de la cámara para cargar tu imagen',
                    showConfirmButton: false,
                    timer: 4000
                })
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [imagenes, setImagenes] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://mtbapi-production.up.railway.app/administrador/fotos/');
        const galeria = await data.json();
        setImagenes(galeria);
    }


    return (
        <React.Fragment>
            <Navb />
            <main>
                <Container>
                    <hr style={{ margin: '3.44rem 0' }}></hr>

                    <Button  style={{backgroundColor:'#3DC814'}} onClick={uploadImage} variant="contained" component="label">
                        Subir imagen
                    </Button>
                    <IconButton    aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file"  onChange={(e) => setImage(e.target.files[0])} />
                        <PhotoCamera />
                    </IconButton>
                    <br /><br />
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {imagenes.map((item) => (
                            <ImageListItem key={item.src}>
                                <img
                                    // src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                                    // srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    // alt={item.lugar}
                                    // loading="lazy"
                                    src={item.src}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Divider />
                    <Footer />
                </Container>
            </main>
        </React.Fragment>
    )
}

export default Galeria;