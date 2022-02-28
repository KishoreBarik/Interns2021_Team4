import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Appp.css";
export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Kavya malathi",
      email: "Kavyamalathi18@mail.com",

      phone: "7981122197",
    },
    {
      id: uuidv4(),
      name: "Anantha Kotipalli",
      email: "Anantha@mail.com",

      phone: "12344566",
      project: "project-1",
    },
    {
      id: uuidv4(),
      name: "Sireesha",
      email: "Sireesha@mail.com",

      phone: "785468468",
      project: "project-3",
    },
    {
      id: uuidv4(),
      name: "jesse",
      email: "jesse@mail.com",

      phone: "9985645731",
      project: "project-2",
    },
    {
      id: uuidv4(),
      name: "prathyusha",
      email: "prathyusha@mail.com",

      phone: "4587942097",
      project: "project-1",
    },
  ]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addEmployee = (name, email, phone, project) => {
    setEmployees([...employees, { id: uuidv4(), name, email, phone, project }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
