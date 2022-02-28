import ProjectContextProvider from "./ProjectContext";
import ProjectList from "./ProjectList";
function Apps() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <ProjectContextProvider>
            <ProjectList />
          </ProjectContextProvider>
        </div>
      </div>
    </div>
  );
}
export default Apps;
