import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Accordion } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import NavBar from "./NavBar";

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
          navElement="Dashboard"
          navElement1="Report"
          navElement2="Monthly Report"
          username="Username"
          logout="Log Out"
        />
        <div>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            name="startDate"
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <div class="m-5">
          <div class="row">
            <div class="col-sm-6">
              <Accordion className="mb-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Project 1</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-end">
                      <button className="btn btn-primary">+ Add Task</button>
                    </div>
                    <div id="tasksContainer"></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col-sm-6">
              <Accordion className="mb-3">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Project 2</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-end">
                      <button className="btn btn-primary">+ Add Task</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col-sm-6">
              <Accordion className="mb-3">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Project 3</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-end">
                      <button className="btn btn-primary">+ Add Task</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col-sm-6">
              <Accordion className="mb-3">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Project 4</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-row justify-content-end">
                      <button
                        className="btn btn-primary"
                        onClick={this.onClickAddTask}
                      >
                        + Add Task
                      </button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
