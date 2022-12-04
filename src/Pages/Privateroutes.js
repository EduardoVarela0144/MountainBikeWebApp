import { Route, Routes } from 'react-router-dom';
import DashboardUsers from "../Pages/DashboardUsers";
import DashboardCom from '../Pages/DashboardCom';
import DashboardRoles from '../Pages/DashboardRoles';
import Notfound from '../Pages/Notfound';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/DashboardUsers" element={<DashboardUsers />} />
            <Route path="/DashboardCom" element={<DashboardCom />} />
            <Route path="/DashboardRoles" element={<DashboardRoles />} />
            <Route path="/*" element={<Notfound />} />
        </Routes>
    );
};

