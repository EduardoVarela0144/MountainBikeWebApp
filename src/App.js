import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Carousel.css'
import { Routes, Route } from "react-router-dom";
import Acerca from "./Pages/Acerca";
import Inicio from "./Pages/Inicio";
import Login from "./Pages/Login";
import Trails from "./Pages/Trails";
import Blog from "./Pages/Blog";
import Galeria from "./Pages/Galeria";
import DashboardUsers from "./Pages/DashboardUsers";
import DashboardCom from './Pages/DashboardCom';
import DashboardRoles from './Pages/DashboardRoles';
import Notfound from './Pages/Notfound';


function App() {
  return (
    <>
      <Routes>
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/" element={<Login />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/Acerca" element={<Acerca />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/Inicio" element={<Inicio />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/Trails" element={<Trails />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/Blog" element={<Blog />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/Galeria" element={<Galeria />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/DashboardUsers" element={<DashboardUsers />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/DashboardCom" element={<DashboardCom />} />
        <Route path="https://eduardovarela0144.github.io/mtb_cliente/DashboardRoles" element={<DashboardRoles />} />  
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
