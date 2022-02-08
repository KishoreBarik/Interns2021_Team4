import React from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div>
      <div className="text-center d-flex flex-column justify-content-center">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/user/dashboard" element={<Dashboard />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/Reports" exact element={<Reports />} />
          <Route path="pages/MonthlyReport" exact element={<MonthlyReport />} />
          <Route path="/viewprofile" element={<ViewProfile/>}></Route>
          <Route path="/project1" element={<Project1/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
