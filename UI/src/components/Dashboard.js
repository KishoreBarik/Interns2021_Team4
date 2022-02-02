import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Sidebar />
        </div>
        <div class="m-5">
          <div class="row">
            <div class="col-sm-3 projects-container">
              <div class="card p-3">
                <div class="card-body">
                  <h5 class="card-title">Project-1</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="" class="btn btn-primary">
                    View More
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card p-3">
                <div class="card-body">
                  <h5 class="card-title">Project-2</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="" class="btn btn-primary">
                    View More
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card p-3">
                <div class="card-body">
                  <h5 class="card-title">Project-3</h5>
                  <p class="card-text">Welcome</p>
                  <Link to="" class="btn btn-primary">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
