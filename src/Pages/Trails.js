import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Container } from '../Componentes/Container';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';
import { Navb } from '../Componentes/Navb';
import { Rutasagrega } from '../Componentes/Rutasagrega';
import Modal from 'react-bootstrap/Modal';
import * as ReactDOM from 'react-dom/client';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


//import { Icon } from 'leaflet';

function Trails() {

    const [routes, setRoutes] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://mtbapi-production.up.railway.app/administrador/rutas/');
        const r = await data.json();
        setRoutes(r);
    }


    document.title = 'Trails';

    const positionc = [17.06542, -96.72365]

    // Modal para agregar rutas
    const [rutasShow, setRutasShow] = useState(false);

    // Sección de funciones par agregar rutas

    const center = {
        lat: 17.06542,
        lng: -96.72365,
    }

    const [position, setPosition] = useState(center)

    function DraggableMarker() {



        const [draggable, setDraggable] = useState(false)
        const markerRef = useRef(null)




        const eventHandlers = useMemo(
            () => ({
                dragend() {
                    const marker = markerRef.current
                    if (marker != null) {
                        setPosition(marker.getLatLng())
                        // Le paso los parametros a renderizar
                        //const nueva = marker.getLatLng();

                    }
                },
            }),
            [],
        )
        const toggleDraggable = useCallback(() => {
            setDraggable((d) => !d)
        }, [])

        return (
            <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
                <Popup minWidth={90}>
                    <span onClick={toggleDraggable}>
                        {draggable
                            ? 'El marcador ya esta en modo de edición'
                            : 'Haz un click en este mensaje para moverme'}
                    </span>
                </Popup>
            </Marker>
        )
    }

    const manda = () => {
        // Busco elemento del modal
        const root = ReactDOM.createRoot(document.getElementById('modal-body'));
        const element = (

            <Rutasagrega coordenadas={position} />

        )
        // Renderizo el componente
        root.render(element);
    }
    return (
        <React.Fragment>
            <Navb />
            <Container>
                <hr style={{ margin: '3.44rem 0' }}></hr>

                <MapContainer style={{ height: '450px' }} center={positionc} zoom={11.5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />{
                        routes.map(item => (

                            <Marker position={[item.x, item.y]} >
                                <Popup>
                                    <h4>{item.nombre}</h4>
                                    <img class="bd-placeholder-img" width="100%" height="100%" alt='Inicio_1' style={{ maxWidth: 'inherit', maxheight: 'inherit', height: 'inherit', width: 'inherit', objectFit: 'cover' }} src={item.url} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img><br /><br />
                                    <Typography component="legend">Calificación</Typography>
                                    <Rating name="read-only" value={item.dificultad} readOnly />

                                </Popup>
                            </Marker>))}
                </MapContainer>

            </Container>

            {/* Zona de boton para agregar punto a mapa  */}

            {/*Boton de agregar*/}

            <button onClick={() => setRutasShow(true)} className="float">+</button>

            {/*Modal para agregar rutas*/}

            <Modal
                size="lg"
                show={rutasShow}
                onHide={() => setRutasShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agregar rutas
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body'>


                    <MapContainer style={{ height: '450px' }} center={center} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <DraggableMarker />
                    </MapContainer>

                    <Button  onClick={manda} style={{ width: '100%',backgroundColor:'#3DC814' }} variant="contained" endIcon={<SendIcon />}>
                        Siguiente
                    </Button>


                </Modal.Body>
            </Modal>


        </React.Fragment>
    )
}

export default Trails