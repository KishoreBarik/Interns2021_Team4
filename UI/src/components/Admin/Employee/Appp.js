import Heading1 from "../../User/Heading1";
import Admin from "../Admin";
import EmployeeContextProvider from "./EmployeeContext";
import EmployeeList from "./EmployeeList";

function Apps() {
  return (
    <div>
      <Admin></Admin>

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