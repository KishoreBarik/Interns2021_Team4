import NavBar from "../../components/NavBar";
import EmployeeContextProvider from "./EmployeeContext";
import EmployeeList from "./EmployeeList";
function Apps() {
  return (
    <div>
      <NavBar />

      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Apps;
