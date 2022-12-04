import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import Inicio_1 from '../Image/Inicio_1.jpg';
import { NavLink } from 'react-router-dom';
function Dashboardsidebar(props) {
    return (

        <>
            <img className='Fondo' alt='Fondo' src={Inicio_1} ></img>

            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>

                <CDBSidebar textColor="#fff" backgroundColor="#212529" >
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="/DashboardUsers" className="text-decoration-none" style={{ color: 'white' }}>
                            Administrador
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/DashboardUsers" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="user" >Usuarios</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/DashboardCom" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="comment">Comentarios</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/DashboardRoles" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="users">Roles</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="arrow-left">Salir</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Mtb <label className="navbar-brand" style={{ color: '#3DC814' }}> Oaxaca</label>
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
                {props.children}
            </div>
        </>
    )
}
export { Dashboardsidebar }