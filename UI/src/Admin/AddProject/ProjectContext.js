import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Appp.css";
export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [Projects, setProjects] = useState([
    {
      id: uuidv4(),
      projectname: "Ehour",
      departmentname: "frontend",
      projectstatus: "Active",
    },

    {
      id: uuidv4(),
      projectname: "Timehunter",
      departmentname: "Backend",
      projectstatus: "Active",
    },
    {
      id: uuidv4(),
      projectname: "XYZ",
      departmentname: "xyz DEPT",
      projectstatus: "Active",
    },
  ]);

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem("projects")));
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(Projects));
  });

  const sortedEmployees = Projects.sort((a, b) =>
    a.projectname < b.projectname ? -1 : 1
  );

  const addProject = (projectname, departmentname, projectstatus) => {
    setProjects([
      ...Projects,
      { id: uuidv4(), projectname, departmentname, projectstatus },
    ]);
  };

  const deleteproject = (id) => {
    setProjects(Projects.filter((project) => project.id !== id));
  };

  const updateProject = (id, updatedProject) => {
    setProjects(
      Projects.map((project) => (project.id === id ? updatedProject : project))
    );
  };

  return (
    <ProjectContext.Provider
      value={{ sortedEmployees, addProject, deleteproject, updateProject }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
