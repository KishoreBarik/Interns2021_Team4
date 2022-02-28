import React from "react";
import { Route,Routes} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Reports from "./components/User/Reports";
import MonthlyReport from "./pages/MonthlyReport";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import ViewProfile from "./components/User/ViewProfile";
import Project1 from "./components/Project1";

import Homepage from "./components/Admin/Part/Homepage";
import Heading from "./components/Admin/Part/Heading";

import Admin from "./components/Admin/Admin";

import EmployeeList from "./components/Admin/EmployeeList";
import AddForm from "./components/Admin/AddForm";
import EditForm from "./components/Admin/EditForm";
import Employee from "./components/Admin/Employee";
import Pagination from "./components/Admin/Pagination";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Adminhead from "./components/Admin/AdminHead";

import EmployeeContextProvider from "./components/Admin/Context/EmployeeContext";
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
        <EmployeeContextProvider>
        
         
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/user/dashboard" element={<Dashboard />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        
          
          <Route exact path="/homepage"  element={<Homepage />} />
          <Route exact path="/heading"  element={<Heading/>} />
        
          <Route exact path="/admindashboard"  element={<AdminDashboard />} />


          <Route exact path="/admin"  element={<Admin />} />
          <Route exact path="/employeelist"  element={<EmployeeList />} />
          <Route exact path="/addform"  element={<AddForm />} />
          <Route exact path="/editform"  element={<EditForm />} />
          <Route exact path="/pagination"  element={<Pagination />} />
          <Route exact path="/employee"  element={<Employee />} />
          <Route exact path="/adminhead"  element={<Adminhead />} />



          <Route exact path="/client"  element={<Client />} />
          <Route exact path="/clientlist"  element={<ClientList />} />
          <Route exact path="/clientpagination"  element={<ClientPagination />} />
          <Route exact path="/addclient"  element={<AddClient />} />
          <Route exact path="/editclient"  element={<EditClient />} />
          <Route exact path="/mainclient"  element={<MainClient />} />



          <Route path="/Reports" exact element={<Reports />} />
          <Route path="/Reports" exact element={<Reports />} />
          <Route path="pages/MonthlyReport" exact element={<MonthlyReport />} />
          <Route path="/viewprofile" element={<ViewProfile/>}></Route>
          <Route path="/project1" element={<Project1/>}></Route>
        </Routes>

        
      
        </EmployeeContextProvider>
        </ClientContextProvider>
      </div>
    </div>
  );
}

export default App;
