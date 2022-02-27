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
import AdminDashboard from "./components/Admin/AdminDashboard";
import EditUser from "./components/Admin/Part/EditUser";
import AddUser from "./components/Admin/Part/AddUser";
import Homepage from "./components/Admin/Part/Homepage";
import Heading from "./components/Admin/Part/Heading";
import UserList from "./components/Admin/Part/UserList";
import {GlobalProvider} from "./components/Admin/Context/GlobalState";
import Admin from "./components/Admin/Admin";
import Adminhead from "./components/Admin/AdminHead";
import { DepartmentProvider} from "./components/Admin/Context/DeptState";



function App() {
  return (
    <div>
      <div className="text-center d-flex flex-column justify-content-center">
      <DepartmentProvider>
        <GlobalProvider>
         
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/user/dashboard" element={<Dashboard />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/admindashboard" element={<AdminDashboard />} />
          <Route exact path="/edit/:id"  element={<EditUser />} />
          <Route exact path="/adduser"  element={<AddUser/>} />
          <Route exact path="/homepage"  element={<Homepage />} />
          <Route exact path="/heading"  element={<Heading/>} />
          <Route exact path="/userlist"  element={<UserList />} />
          <Route exact path="/admin"  element={<Admin />} />
          <Route exact path="/adminhead"  element={<Adminhead />} />
          <Route path="/Reports" exact element={<Reports />} />
          <Route path="/Reports" exact element={<Reports />} />
          <Route path="pages/MonthlyReport" exact element={<MonthlyReport />} />
          <Route path="/viewprofile" element={<ViewProfile/>}></Route>
          <Route path="/project1" element={<Project1/>}></Route>
        </Routes>

        
        </GlobalProvider>
        </DepartmentProvider>
      </div>
    </div>
  );
}

export default App;
