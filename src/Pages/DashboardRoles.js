import React from 'react';
import "../Css/Dashboard.css"
import { Dashboardsidebar } from "../Componentes/Dashboardsidebar"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function DashboardRoles() {

    document.title = 'Dashboard';

    // Variable para listar roles
    const [roles, setRoles] = React.useState([])

    // Variable para mostrar modal de edición
    const [lgShow, setLgShow] = useState(false);

    // Variable para mostrar modal de agregar
    const [AgregarShow, setAgregar] = useState(false);

    // Variable para listar rol con id especifico
    const [EditRol, setEditRol] = React.useState([])

    // Variables para enviar o editar
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [userCrear, setuserCrear] = useState("");
    const [userActualizar, setuserActualizar] = useState("");
    const [userBorrar, setuserBorrar] = useState("");
    const [imageCrear, setimageCrear] = useState("");
    const [imageActualizar, setimageActualizar] = useState("");
    const [imageBorrar, setimageBorrar] = useState("");
    const [rutasCrear, setrutasCrear] = useState("");
    const [rutasActualizar, setrutasActualizar] = useState("");
    const [rutasBorrar, setrutasBorrar] = useState("");
    const [comCrear, setcomCrear] = useState("");
    const [comActualizar, setcomActualizar] = useState("");
    const [comBorrar, setcomBorrar] = useState("");

    // Función para consumir roles y listar
    const obtenerDatos = async () => {
        const data = await fetch('https://mtbapi-production.up.railway.app/administrador/roles/');
        const users = await data.json();
        setRoles(users);
    }

    // Ejecución de función de listar
    React.useEffect(() => {
        obtenerDatos();
    }, [])

    //Función de consumo de api para eliminar
    const Eliminar = event => {

        //Jalo el id del rol que es el mismo del boton
        const id_eliminar = event.currentTarget.id;

        Swal.fire({
            title: '¿Estas seguro que quieres eliminar este rol?',

            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Rol eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                borra();
            }
        })

        let borra = async () => {

            try {
                let res = await fetch('https://mtbapi-production.up.railway.app/administrador/rol/' + id_eliminar, {
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
                    console.log("Rol eliminado con exito")
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
        setEditRol("");
        // Jalo id del boton que es la misma del usuario a editar
        const id_editar = event.currentTarget.id;
        const obtenerDatos = async () => {
            const data = await fetch('https://mtbapi-production.up.railway.app/administrador/rol/' + id_editar);
            const roles = await data.json();
            setEditRol(roles);
        }
        obtenerDatos();
        // Muestro el modal con esos datos
        setLgShow(true);
    }

    // Consumo de la api para agregar un usuario
    let handleAgregar = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/rol', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                   
                    nombre: nombre,
                    descripcion: descripcion,
                    userCrear: userCrear,
                    userActualizar: userActualizar,
                    userBorrar: userBorrar,
                    imageCrear: imageCrear,
                    imageActualizar: imageActualizar,
                    imageBorrar: imageBorrar,
                    rutasCrear: rutasCrear,
                    rutasActualizar: rutasActualizar,
                    rutasBorrar: rutasBorrar,
                    comCrear: comCrear,
                    comActualizar: comActualizar,
                    comBorrar: comBorrar
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setDescripcion("");
                setuserCrear("");
                setuserActualizar("");
                setuserBorrar("");
                setimageCrear("");
                setimageActualizar("");
                setimageBorrar("");
                setrutasCrear("");
                setrutasActualizar("");
                setrutasBorrar("");
                setcomCrear("");
                setcomActualizar("");
                setcomBorrar("");
                console.log("El rol se agrego con exito");
                Swal.fire({
                    icon: 'success',
                    title: 'Rol agregado con éxito',
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

    // Validación de edición {Rellenar valores que se quedaran igual}
    const valida = () => {

        if (nombre === "") {
            var n = document.getElementById("formNombre").value;
            setNombre(n);
        }
        if (descripcion === "") {
            var d = document.getElementById("formDescripcion").value;
            setDescripcion(d)
        }
        if (userCrear === "") {
            var uc = document.getElementById("formUserCrear").value;
            setuserCrear(uc)
        }
        if (userActualizar === "") {
            var ua = document.getElementById("formUserActualizar").value;
            setuserActualizar(ua)
        }
        if (userBorrar === "") {
            var ub = document.getElementById("formUserBorrar").value;
            setuserBorrar(ub)
        }
        if (imageCrear === "") {
            var ic = document.getElementById("formImageCrear").value;
            setimageCrear(ic)
        }
        if (imageActualizar === "") {
            var ia = document.getElementById("formImageActualizar").value;
            setimageActualizar(ia)
        }
        if (imageBorrar === "") {
            var ib = document.getElementById("formImageBorrar").value;
            setimageBorrar(ib)
        }
        if (rutasCrear === "") {
            var rc = document.getElementById("formRutasCrear").value;
            setrutasCrear(rc)
        }
        if (rutasActualizar === "") {
            var ra = document.getElementById("formRutasActualizar").value;
            setrutasActualizar(ra)
        }
        if (rutasBorrar === "") {
            var rb = document.getElementById("formRutasBorrar").value;
            setrutasBorrar(rb)
        }
        if (comCrear === "") {
            var cc = document.getElementById("formComCrear").value;
            setcomCrear(cc)
        }
        if (comActualizar === "") {
            var ca = document.getElementById("formComActualizar").value;
            setcomActualizar(ca)
        }
        if (comBorrar === "") {
            var cb = document.getElementById("formComBorrar").value;
            setcomBorrar(cb)
        }

        /*console.log(uc);
        console.log(ua);
        console.log(ub);
        console.log(ic);
        console.log(ia);
        console.log(ib);
        console.log(rc);
        console.log(ra);
        console.log(rb);
        console.log(cc);
        console.log(ca);
        console.log(cb);*/

    }

    const valida2 = () => {

        if (nombre === "") {
            var n = false;
            setNombre(n);
        }
        if (descripcion === "") {
            var d = false;
            setDescripcion(d)
        }
        if (userCrear === "") {
            var uc = false;
            setuserCrear(uc)
        }
        if (userActualizar === "") {
            var ua = false;
            setuserActualizar(ua)
        }
        if (userBorrar === "") {
            var ub = false;
            setuserBorrar(ub)
        }
        if (imageCrear === "") {
            var ic = false;
            setimageCrear(ic)
        }
        if (imageActualizar === "") {
            var ia = false;
            setimageActualizar(ia)
        }
        if (imageBorrar === "") {
            var ib = false;
            setimageBorrar(ib)
        }
        if (rutasCrear === "") {
            var rc = false;
            setrutasCrear(rc)
        }
        if (rutasActualizar === "") {
            var ra = false;
            setrutasActualizar(ra)
        }
        if (rutasBorrar === "") {
            var rb = false;
            setrutasBorrar(rb)
        }
        if (comCrear === "") {
            var cc = false;
            setcomCrear(cc)
        }
        if (comActualizar === "") {
            var ca = false;
            setcomActualizar(ca)
        }
        if (comBorrar === "") {
            var cb = false;
            setcomBorrar(cb)
        }

        /*console.log(uc);
        console.log(ua);
        console.log(ub);
        console.log(ic);
        console.log(ia);
        console.log(ib);
        console.log(rc);
        console.log(ra);
        console.log(rb);
        console.log(cc);
        console.log(ca);
        console.log(cb);*/

    }

    // Consumo de la api para editar un rol
    let handleEdit = async (e) => {
        e.preventDefault();
        // Jalo el valor del input con el id
        const id_editar_val = document.getElementById('formId').value;

        try {
            let res = await fetch('https://mtbapi-production.up.railway.app/administrador/rol/' + id_editar_val, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    descripcion: descripcion,
                    userCrear: userCrear,
                    userActualizar: userActualizar,
                    userBorrar: userBorrar,
                    imageCrear: imageCrear,
                    imageActualizar: imageActualizar,
                    imageBorrar: imageBorrar,
                    rutasCrear: rutasCrear,
                    rutasActualizar: rutasActualizar,
                    rutasBorrar: rutasBorrar,
                    comCrear: comCrear,
                    comActualizar: comActualizar,
                    comBorrar: comBorrar
                }),
            });
            if (res.status === 200) {
                /*setNombre("");
                setDescripcion("");
                setuserCrear("");
                setuserActualizar("");
                setuserBorrar("");
                setimageCrear("");
                setimageActualizar("");
                setimageBorrar("");
                setrutasCrear("");
                setrutasActualizar("");
                setrutasBorrar("");
                setcomCrear("");
                setcomActualizar("");
                setcomBorrar("");*/
                console.log("La edición fue exitosa");
                Swal.fire({
                    icon: 'success',
                    title: 'Rol editado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al editar");
                console.log(nombre);
                console.log(descripcion);
                console.log(userCrear);
                console.log(userActualizar);
                console.log(userBorrar);
                console.log(imageCrear);
                console.log(imageActualizar);
                console.log(imageBorrar);
                console.log(rutasCrear);
                console.log(rutasActualizar);
                console.log(rutasBorrar);
                console.log(comCrear);
                console.log(comActualizar);
                console.log(comBorrar);

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

    return (
        <>
            {/* Modal para agregar */}
            <Modal
                size="lg"
                show={AgregarShow}
                onHide={() => setAgregar(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agregar Rol
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleAgregar} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formDescripcion">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control as="textarea" rows={3} type="text" onChange={(e) => setDescripcion(e.target.value)} />
                                    </Form.Group>
                                    <Button style={{ width: '100%' }} className="btnp" variant="success" type="submit" onClick={valida2}>
                                        Agregar
                                    </Button>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formUserCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setuserCrear(e.target.checked)} label="Agregar usuarios" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formUserActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setuserActualizar(e.target.checked)} label="Modificar usuarios" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formUserBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setuserBorrar(e.target.checked)} label="Eliminar usuarios" />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formImageCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setimageCrear(e.target.checked)} label="Agregar imagen" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formImageActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setimageActualizar(e.target.checked)} label="Modificar imagen" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formImageBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setimageBorrar(e.target.checked)} label="Eliminar imagen" />
                                    </Form.Group>


                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formRutasCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setrutasCrear(e.target.checked)} label="Agregar rutas" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRutasActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setrutasActualizar(e.target.checked)} label="Modificar rutas" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRutasBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setrutasBorrar(e.target.checked)} label="Eliminar rutas" />
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="formComCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setcomCrear(e.target.checked)} label="Agregar comentarios" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formComActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setcomActualizar(e.target.checked)} label="Modificar comentarios" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formComBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setcomBorrar(e.target.checked)} label="Eliminar comentarios" />
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Modal para editar */}
            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Editar Rol
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleEdit}>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="number" value={EditRol.id} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" Value={EditRol.nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formDescripcion">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control type="text" Value={EditRol.descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                    </Form.Group>
                                    <Button style={{ width: '100%' }} className="btnp" variant="success" type="submit" onClick={valida}>
                                        Editar
                                    </Button>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formUserCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setuserCrear(e.target.checked)} value={EditRol.userCrear} label="Agregar usuarios" defaultChecked={EditRol.userCrear} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formUserActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setuserActualizar(e.target.checked)} value={EditRol.userActualizar} label="Modificar usuarios" defaultChecked={EditRol.userActualizar} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formUserBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setuserBorrar(e.target.checked)} value={EditRol.userBorrar} label="Eliminar usuarios" defaultChecked={EditRol.userBorrar} />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formImageCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setimageCrear(e.target.checked)} value={EditRol.imageCrear} label="Agregar imagen" defaultChecked={EditRol.imageCrear} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formImageActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setimageActualizar(e.target.checked)} value={EditRol.imageActualizar} label="Modificar imagen" defaultChecked={EditRol.imageActualizar} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formImageBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setimageBorrar(e.target.checked)} value={EditRol.imageBorrar} label="Eliminar imagen" defaultChecked={EditRol.imageBorrar} />
                                    </Form.Group>


                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formRutasCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setrutasCrear(e.target.checked)} value={EditRol.rutasCrear} label="Agregar rutas" defaultChecked={EditRol.rutasCrear} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRutasActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setrutasActualizar(e.target.checked)} value={EditRol.rutasActualizar} label="Modificar rutas" defaultChecked={EditRol.rutasActualizar} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRutasBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setrutasBorrar(e.target.checked)} value={EditRol.rutasBorrar} label="Eliminar rutas" defaultChecked={EditRol.rutasBorrar} />
                                    </Form.Group>



                                    <Form.Group className="mb-3" controlId="formComCrear">
                                        <Form.Check type="checkbox" onClick={(e) => setcomCrear(e.target.checked)} value={EditRol.comCrear} label="Agregar comentarios" defaultChecked={EditRol.comCrear} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formComActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setcomActualizar(e.target.checked)} value={EditRol.comActualizar} label="Modificar comentarios" defaultChecked={EditRol.comActualizar} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formComBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setcomBorrar(e.target.checked)} value={EditRol.comBorrar} label="Eliminar comentarios" defaultChecked={EditRol.comBorrar} />
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Contenido general y tablas */}
            <div className='Contenido'>
                <Dashboardsidebar>
                    <div className='Final'>
                        <Button className='Agregar' onClick={() => setAgregar(true)} variant="warning">Agregar</Button>
                        <input type="text" id="Buscar" onKeyUp={Buscar} placeholder="Buscar por Nombre ..." />

                        <Table id="Data" variant="dark" striped bordered hover responsive="xl" className='Big' >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.descripcion}</td>
                                            <td>
                                                <Button id={item.id} onClick={Eliminar} variant="danger">Eliminar</Button>
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
export default DashboardRoles