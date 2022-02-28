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


import AddTask from "./components/User/Task/AddTask";
import EditTask from "./components/User/Task/EditTask";
import Task from "./components/User/Task/Task";
import TaskContextProvider from "./components/User/Context1/TaskContext";
import TaskList from "./components/User/Task/TaskList";
import TaskPagination from "./components/User/Task/TaskPagination";
import Heading1 from "./components/User/Heading1";
import NavBarDulpi from "./components/NavBarDulpi";

function App() {
  return (
    <div>
      <div className="text-center d-flex flex-column justify-content-center">
        <TaskContextProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/user/dashboard" element={<Dashboard />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/Reports" exact element={<Reports />} />
          <Route path="pages/MonthlyReport" exact element={<MonthlyReport />} />
          <Route path="/viewprofile" element={<ViewProfile/>}></Route>
        

          <Route path="/addtask" element={<AddTask />} />
          <Route path="/edittask" element={<EditTask />} />
          <Route path="/task" element={<Task/>} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/pagination" element={<TaskPagination />} />
          <Route path="/heading1" element={<Heading1 />} />
      
          


        </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
