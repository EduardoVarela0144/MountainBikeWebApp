import React from 'react';
import "../Css/Dashboard.css"
import { Dashboardsidebar } from "../Componentes/Dashboardsidebar"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'


function DashboardCom() {
    const [comentario, setComentario] = React.useState([])
    const obtenerDatos = async () => {
        const data = await fetch('https://mtbapi-production.up.railway.app/administrador/comentarios/');
        const users = await data.json();
        setComentario(users);
    }
    React.useEffect(() => {
        obtenerDatos();
    }, [])
    document.title = 'Dashboard';

    //Función de eliminar
    const Eliminar = event => {
        const id_eliminar = event.currentTarget.id;
        Swal.fire({
            title: '¿Estas seguro que quieres eliminar este comentario?',

            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Comentario eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                borra();
            }
        })
        let borra = async () => {

            try {
                let res = await fetch('https://mtbapi-production.up.railway.app/administrador/comentario/' + id_eliminar, {
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
                    console.log("Comentario eliminado con exito")
                } else {
                    console.log("Error al eliminar");
                }
            } catch (err) {
                console.log(err);
            }
        };
     
    }
    
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
            <div className='Contenido'>

                <Dashboardsidebar>

                    {/* <Button className="Agregar" variant="warning">Agregar</Button> */}
                    <div className='Final'>
                    <input style={{marginLeft:'5px'}} type="text" id="Buscar" onKeyUp={Buscar} placeholder="Buscar por Nombre ..." />

                        <Table id="Data" variant="dark" striped bordered hover responsive="xl">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Pista</th>
                                    <th>Edad</th>
                                    <th>País</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comentario.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.pista}</td>
                                            <td>{item.edad}</td>
                                            <td>{item.pais}</td>
                                            <td><Button id={item.id} onClick={Eliminar} variant="danger">Eliminar</Button></td>
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
export default DashboardCom