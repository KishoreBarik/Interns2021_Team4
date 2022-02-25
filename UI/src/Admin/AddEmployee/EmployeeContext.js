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
    },
    {
      id: uuidv4(),
      name: "Sireesha",
      email: "Sireesha@mail.com",

      phone: "785468468",
    },
    {
      id: uuidv4(),
      name: "Fran Wilson",
      email: "franwilson@mail.com",

      phone: "(204) 619-5731",
    },
    {
      id: uuidv4(),
      name: "Martin Blank",
      email: "martinblank@mail.com",

      phone: "(480) 631-2097",
    },
  ]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addEmployee = (name, email, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, phone }]);
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
