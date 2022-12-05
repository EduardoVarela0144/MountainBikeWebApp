import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import React, { useState } from 'react';
import Inicio_1 from '../Image/Inicio_1.jpg';
import Inicio_2 from '../Image/Inicio_2.jpg';
import Inicio_3 from '../Image/Inicio_3.jpg';


function Carousel() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const opts = {
        height: '300',
        width: '465',
        objectFit: 'cover',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Vive la experiencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <YouTube opts={opts} videoId="dD7qIOcWj_4" />
                </Modal.Body>
            </Modal>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="bd-placeholder-img" width="100%" height="100%" alt='Inicio_1' style={{ maxWidth: 'inherit', maxheight: 'inherit', height: 'inherit', width: 'inherit', objectFit: 'cover', filter: 'brightness(45%)' }} src={Inicio_1} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Vive la experiencia</h1>
                                <p>Visita Oaxaca uno de los mejores sitios para practicar ciclismo de montaña.</p>
                                <p><button className="btnp" onClick={() => handleShow('xl-down')}>Ver video</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="filtro"></div>
                        <img className="bd-placeholder-img" width="100%" height="100%" alt='Inicio_2' style={{ maxWidth: 'inherit', maxheight: 'inherit', height: 'inherit', width: 'inherit', objectFit: 'cover', filter: 'brightness(45%)' }} src={Inicio_2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <div className="overlay"
                            style={{ backgroundimage: 'url(Inicio_2)' }}
                        ></div>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Conecta con Oaxaca</h1>
                                <p>Revisa algunas de las opiniones de otros ciclistas.</p>
                                <p><a className="btnp-l" href="/mtb_cliente/#/Blog">Opiniones</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="filtro"></div>
                        <img className="bd-placeholder-img" width="100%" height="100%" alt='Inicio_3' style={{ maxWidth: 'inherit', maxheight: 'inherit', height: 'inherit', width: 'inherit', objectFit: 'cover', filter: 'brightness(45%)' }} src={Inicio_3} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <div className="overlay"
                            style={{ backgroundimage: 'url(Inicio_3)' }}
                        ></div>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Conoce los trails del estado</h1>
                                <p>Oaxaca cuentas con las mejores pistas en México y el mundo.</p>
                                <p><a className="btnp-l" href="/mtb_cliente/#/Trails">Ver trails</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );

}

export { Carousel }