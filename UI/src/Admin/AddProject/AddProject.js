//import "~antd/dist/antd.css";
import "./AddProject.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function AddingProject() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  let newid = 5;
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Ehour",
      dept_name: "React",
      status: "Active",
    },
    {
      id: 2,
      name: "Timehunter ",
      dept_name: "Angular",
      status: "Active",
    },
    {
      id: 3,
      name: " xyz",
      dept_name: " xyz dept",
      status: "inactive",
    },
    {
      id: 4,
      name: "Abc",
      dept_name: "Abc dept",
      status: "inactive",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Project Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Department",
      dataIndex: "dept_name",
    },
    {
      key: "4",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditProject(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteProject(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddProject = () => {
    const newProject = {
      id: newid,
    };
    newid = newid + 1;

    setDataSource((pre) => {
      return [...pre, newProject];
    });
  };

  const onDeleteProject = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Project     record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((Project) => Project.id !== record.id);
        });
      },
    });
  };
  const onEditProject = (record) => {
    setIsEditing(true);
    setEditingProject({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingProject(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddProject}>Add a New Project</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Project details"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((Project) => {
                if (Project.id === editingProject.id) {
                  return editingProject;
                } else {
                  return Project;
                }
              });
            });
            resetEditing();
          }}
        >
          {" "}
          Project Name:
          <Input
            value={editingProject?.name}
            onChange={(e) => {
              setEditingProject((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          Department name:
          <Input
            value={editingProject?.dept_name}
            onChange={(e) => {
              setEditingProject((pre) => {
                return { ...pre, dept_name: e.target.value };
              });
            }}
          />
          Project Status :
          <select
            onChange={(e) => {
              setEditingProject((pre) => {
                console.log(e.target.value);
                return { ...pre, status: e.target.value };
              });
            }}
          >
            <option eventKey="Active">Active</option>
            <option eventKey="Inactive">InActive</option>
          </select>
        </Modal>
      </header>
    </div>
  );
}

export default AddingProject;
