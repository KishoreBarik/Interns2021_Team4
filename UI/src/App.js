import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import MonthlyReport from "./pages/MonthlyReport";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div>
      <div className="text-center d-flex flex-column justify-content-center">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />}/>
          <Route path="pages/Reports" exact element={<Reports />} />
          <Route path="pages/Reports" exact element={<ReportsOne />} />
          <Route path="pages/Reports" exact element={<ReportsTwo />} />
          <Route path="pages/Reports" exact element={<ReportsThree />} />
          <Route path="pages/MonthlyReport" exact element={<MonthlyReport />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
