import ProjectContextProvider from "./ProjectContext";
import ProjectList from "./ProjectList";
import Admin from "../Admin";

function AddProjects() {
  return (<>
    <Admin></Admin>
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
            
          <ProjectContextProvider>
            <ProjectList />
          </ProjectContextProvider>
        </div>
      </div>
    </div>
    </>
  );
}
export default AddProjects;