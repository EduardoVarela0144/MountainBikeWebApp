import React from 'react';
import "../Css/Dashboard.css"
import { Dashboardsidebar } from "../Componentes/Dashboardsidebar"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function DashboardUsers() {

    document.title = 'Dashboard';

    // Variable para mostrar modal de edición
    const [lgShow, setLgShow] = useState(false);

    // Variable para mostrar modal de agregar
    const [AgregarShow, setAgregar] = useState(false);

    // Variables para enviar o editar
    const [correo, setCorreo] = useState("");
    const [usuario, setUser] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [rol_id, setRol_id] = useState("");

    // Variable para listar usuarios
    const [usuarios, setUsuario] = React.useState([])

    // Variable para listar notificaciones
    const [n, setN] = React.useState([])

    // Variable para listar usuario con id especifico
    const [EditUsuario, setEditUsuario] = React.useState([])

    // fetch('https://mtbapi-production.up.railway.app/administrador/usuario/listar', {
    //     mode: 'cors',
    //     method: 'get',
    //     headers: {
    //         "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY4OTI2MzEzLCJleHAiOjE2Njg5MjgxMTN9.VgyXCYVo552Hra9pkDY5bkw7PZF3d-brf-wJw7Y7q9I",
    //         'Access-Control-Allow-Origin': '*',
    //     },
    // });

    // Consumo de api listar todos los usuarios
    const obtenerDatos = async () => {
        const data = await fetch('https://mtbapi-production.up.railway.app/administrador/usuario/listar');
        const users = await data.json();
        setUsuario(users);
    }
    React.useEffect(() => {
        obtenerDatos();
    }, [])

    // Consumo de api listar notifcaciones
    const obtenern = async () => {
        const data = await fetch('https://mtbapi-production.up.railway.app/administrador/contactos/');
        const not = await data.json();
        setN(not);
    }
    React.useEffect(() => {
        obtenern();
    }, [])


    // Consumo de api para eliminar usuario
    const Eliminar = event => {

        // Jalo el id del boton que es el mismo del usuario
        const id_eliminar = event.currentTarget.id;

        Swal.fire({
            title: '¿Estas seguro que quieres eliminar este usuario?',

            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                borra();
            }
        })

        let borra = async () => {

            try {
                let res = await fetch('https://mtbapi-production.up.railway.app/administrador/usuario/' + id_eliminar, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    }),
                });
                if (res.status === 200) {
                    window.location.reload()
                    window.scrollTo(0, document.body.scrollHeight);
                    console.log("usuario eliminado con exito")
                } else {
                    console.log("Error al eliminar");
                }
            } catch (err) {
                console.log(err);
            }
        };

    }

    // Consumo de api para devolver los datos del usuario a editar{Listar usuario por id}
    const Editar = event => {
        // Jalo id del boton que es la misma del usuario a editar
        const id_editar = event.currentTarget.id;
        const obtenerDatos = async () => {
            const data = await fetch('https://mtbapi-production.up.railway.app/administrador/usuario/' + id_editar);
            const users = await data.json();
            setEditUsuario(users);
        }
        obtenerDatos();
        // Muestro el modal con esos datos
        setLgShow(true);
    }

    // Validación de edición {Rellenar valores que se quedaran igual}
    const valida = () => {

        if (correo === "") {
            var c = document.getElementById("formBasicEmail").value;
            setCorreo(c);
        }
        if (contrasenia === "") {
            var p = document.getElementById("formBasicPassword").value;
            setContrasenia(p)
        }
        if (usuario === "") {
            var u = document.getElementById("formBasicUsuario").value;
            setUser(u)
        }
        if (rol_id === "") {

            var r = document.getElementById("formRol").value;
            setRol_id(r)

        }

    }

    // Consumo de la api para editar un usuario
    let handleEdit = async (e) => {
        e.preventDefault();
        // Jalo el valor del input con el id
        const id_editar_val = document.getElementById('formId').value;

        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/usuario/' + id_editar_val, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: correo,
                    usuario: usuario,
                    contrasenia: contrasenia,
                    rol_id: rol_id,
                }),
            });
            if (res.status === 200) {
                setUser("");
                setCorreo("");
                setContrasenia("");
                setRol_id("");
                console.log("La edición fue exitosa");
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario editado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al editar");

            }
        } catch (err) {
            console.log(err);
        }
    };

    // Consumo de la api para agregar un usuario
    let handleAgregar = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/usuario/crear', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: correo,
                    usuario: usuario,
                    contrasenia: contrasenia,
                    rol_id: rol_id,
                }),
            });
            if (res.status === 200) {
                setUser("");
                setCorreo("");
                setContrasenia("");
                setRol_id("");
                console.log("El usuario se agrego con exito");
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario agregado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al agregar");

            }
        } catch (err) {
            console.log(err);
        }
    };

    // Función de buscar
    const Buscar = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("Buscar");
        filter = input.value.toUpperCase();
        table = document.getElementById("Data");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }



    const [show, setShow] = useState(true);

    const Eliminarn = () => {
        setShow(false)
        fetch('https://mtbapi-production.up.railway.app/administrador/contactosALL', {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
        });
        //window.location.reload()
        window.scrollTo(0, document.body.scrollHeight);
    }
    return (
        <> {n.map(item => (
            <ToastContainer position='top-end'>
                <Toast onClose={Eliminarn} show={show} bg='secondary'>
                    <Toast.Header>
                        <strong className="me-auto">{item.nombre} {item.apellidos} de {item.pais}</strong>
                        <small className="text-muted">{item.createdAt}</small>
                    </Toast.Header>
                    <Toast.Body className='text-white' >{item.comentarios}</Toast.Body>
                </Toast>
            </ToastContainer>))}
            {/* Modal para editar */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Editar Usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleEdit} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="number" value={EditUsuario.id} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" Value={EditUsuario.correo} onChange={(e) => setCorreo(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicUsuario">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" Value={EditUsuario.usuario} onChange={(e) => setUser(e.target.value)} />
                                    </Form.Group>
                                </Col>

                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" Value={EditUsuario.contrasenia} onChange={(e) => setContrasenia(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRol">
                                        <Form.Label>Rol id</Form.Label>
                                        <Form.Control type="number" Value={EditUsuario.rol_id} onChange={(e) => setRol_id(e.target.value)} />
                                    </Form.Group>
                                    <Button style={{ width: '100%' }} className="btnp" variant="success" type="submit" onClick={valida}>
                                        Editar
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Modal para agregar */}
            <Modal
                size="lg"
                show={AgregarShow}
                onHide={() => setAgregar(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agregar Usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleAgregar} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" onChange={(e) => setCorreo(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicUsuario">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" onChange={(e) => setUser(e.target.value)} />
                                    </Form.Group>
                                </Col>

                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" onChange={(e) => setContrasenia(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRol">
                                        <Form.Label>Rol id</Form.Label>
                                        <Form.Control type="number" onChange={(e) => setRol_id(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button style={{ width: '100%' }} className="btnp" variant="success" type="submit">
                                Agregar
                            </Button>


                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>

            <div className='Contenido'>
                <Dashboardsidebar>
                    <div className='Final'>

                        <Button className='Agregar' onClick={() => setAgregar(true)} variant="warning">Agregar</Button>
                        <input type="text" id="Buscar" onKeyUp={Buscar} placeholder="Buscar por correo ..." />


                        <Table id="Data" variant="dark" striped bordered hover responsive="xl">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Correo</th>
                                    <th>Usuario</th>
                                    {/* <th>Contraseña</th> */}
                                    <th>Rol id</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usuarios.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.correo}</td>
                                            <td>{item.usuario}</td>
                                            {/* <td>{item.contrasenia}</td> */}
                                            <td>{item.rol_id}</td>
                                            <td>
                                                <Button id={item.id} onClick={Eliminar} variant="danger">Eliminar</Button>{' '}
                                                <Button id={item.id} onClick={Editar} variant="primary">Editar</Button>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </Dashboardsidebar>
            </div>
        </>
    )
}


export default DashboardUsers