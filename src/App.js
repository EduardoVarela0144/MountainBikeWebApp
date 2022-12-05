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
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Acerca" element={<Acerca />} />
        <Route exact path="/Inicio" element={<Inicio />} />
        <Route exact path="/Trails" element={<Trails />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Galeria" element={<Galeria />} />
        <Route exact path="/DashboardUsers" element={<DashboardUsers />} />
        <Route exact path="/DashboardCom" element={<DashboardCom />} />
        <Route exact path="/DashboardRoles" element={<DashboardRoles />} />  
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
