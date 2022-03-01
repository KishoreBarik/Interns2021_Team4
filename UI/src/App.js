import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

// import ForgotPassword from "./components/ForgotPassword";

// import ForgotPassword from "./components/ForgotPassword";
import Apps from "./Admin/AddEmployee/Appp";
import AddProjects from "./Admin/AddProject/AddProjects";
import Admin from "./Admin/Admin";
function App() {
  return (
    <div>
      <div className="text-center d-flex flex-column justify-content-center">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/forgotpassword" element={<ForgotPassword />} /> */}

          <Route path="/addemployee" exact element={<Apps />} />
          <Route path="/addproject" exact element={<AddProjects />} />
          <Route path="/admin" exact element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
