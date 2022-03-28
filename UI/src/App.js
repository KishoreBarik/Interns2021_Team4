import React from "react";
import { Route,Routes} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import ChangePassword from "./components/ChangePassword";




import Admin from "./components/Admin/Admin";

import DepartmentList from "./components/Admin/Department/DepartmentList";
import AddDepartment from "./components/Admin/Department/AddDepartment";
import EditDepartment from "./components/Admin/Department/EditDepartment";
import Department from "./components/Admin/Department/Department";
import DepartmentPagination from "./components/Admin/Department/DepartmentPagination";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Adminhead from "./components/Admin/Department/AdminHead";

import DepartmentContextProvider from "./components/Admin/Department/Context/DepartmentContext";
import ClientContextProvider from "./components/Admin/Client/Context/ClientContext";

import Client from "./components/Admin/Client/MainClient/Client";
import ClientList from "./components/Admin/Client/MainClient/ClientList";
import ClientPagination from "./components/Admin/Client/MainClient/ClientPagination";
import EditClient from "./components/Admin/Client/MainClient/EditClient";
import MainClient from "./components/Admin/Client/MainClient/MainClient";
import AddClient from "./components/Admin/Client/MainClient/AddClient";



function App() {
  return (
    <div>
      <div className="text-center d-flex flex-column justify-content-center">
        <ClientContextProvider>
        <DepartmentContextProvider>
        
         
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/user/dashboard" element={<Dashboard />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        
          
          
          
        
          <Route exact path="/admindashboard"  element={<AdminDashboard />} />


          <Route exact path="/admin"  element={<Admin />} />
          <Route exact path="/departmentlist"  element={<DepartmentList />} />
          <Route exact path="/adddepartment"  element={<AddDepartment />} />
          <Route exact path="/editdepartment"  element={<EditDepartment />} />
          <Route exact path="/departmentpagination"  element={<DepartmentPagination />} />
          <Route exact path="/department"  element={<Department />} />
          <Route exact path="/adminhead"  element={<Adminhead />} />



          <Route exact path="/client"  element={<Client />} />
          <Route exact path="/clientlist"  element={<ClientList />} />
          <Route exact path="/clientpagination"  element={<ClientPagination />} />
          <Route exact path="/addclient"  element={<AddClient />} />
          <Route exact path="/editclient"  element={<EditClient />} />
          <Route exact path="/mainclient"  element={<MainClient />} />



         
        </Routes>

        
      
        </DepartmentContextProvider>
        </ClientContextProvider>
      </div>
    </div>
  );
}

export default App;
