import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Accordion } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import NavBar from "./NavBar";
import TaskList from "./User/Task/TaskList";
import Card from 'react-bootstrap/Card';
import Heading1 from "./User/Heading1";


class Dashboard extends Component {
  onClickAddTask() {
    let tasksContainerEl = document.getElementById("tasksContainer");
    let task = document.createElement("div");
    task.classList.add("task");
    tasksContainerEl.appendChild(task);

    let taskDetails = document.createElement("input");
    taskDetails.classList.add("p-2 m-2");
    task.appendChild(taskDetails);
  }
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  render() {
    return (
      <div>
        <NavBar
          logout="Log Out"
        />
        <Heading1></Heading1>
        <div className="date-picker-container">

          <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-4">
            <strong>Select Date:</strong><DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                name="startDate"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="col"></div>
          </div>
          </div>

        </div>
        <div className="m-5">
          <div className="row">
            <div className="col-sm-6">
              <Card border="dark">
              <Card.Header>SAILS SOFTWARE</Card.Header>
                <Card.Body>
              <Accordion className="mb-6">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Project 1</Accordion.Header>
                  <Accordion.Body>
                     <TaskList></TaskList>
                    <div id="tasksContainer"></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Card.Body>
              </Card>
              </div>

              <div className="col-sm-6">
              <Card border="dark">
              <Card.Header>LQRTV</Card.Header>
                <Card.Body>
              <Accordion className="mb-6">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Project 2</Accordion.Header>
                  <Accordion.Body>
                      <TaskList></TaskList>
                      <div id="tasksContainer"></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
             </Card.Body>
             </Card>
            </div>

            <div className="col-sm-6">
            <Card border="dark">
            <Card.Header>HOLIDAYS</Card.Header>
                <Card.Body>
              <Accordion className="mb-6">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Project 3</Accordion.Header>
                  <Accordion.Body>
                      <TaskList></TaskList>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Card.Body>
              </Card>
            </div>

            <div className="col-sm-6">
            <Card border="dark">
                <Card.Header>HJHAK</Card.Header>
                <Card.Body>
              <Accordion className="mb-6">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Project 3</Accordion.Header>
                  <Accordion.Body>
                      <TaskList></TaskList>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Card.Body>
              </Card>
            </div>

          

          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
