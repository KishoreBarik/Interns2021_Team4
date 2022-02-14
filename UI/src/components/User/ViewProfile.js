import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class ViewProfile extends React.Component
{
    render()
    { return(
        <div><NavBar />
        <div className="container">
        <br/><br/><br/>
        <div className="row">

          <div className="col">
            <p></p>
          </div>
          <div className="col-4">
      <div className="card text-center center p-3  d-flex justify-content-center">

      <div className="matter ">
          <h1>View Profile</h1>
          <Form.Label htmlFor="exampleColorInput"></Form.Label>
  <Form.Control
    data-provide="datepicker"
    type="date"
    id="select date"
    defaultValue="DD/MM/YYYY"
    title="date"
  />
      </div>
      </div>
      </div>
    
     <div className="col"></div>

     </div>
    
     </div>
</div>
    )
}
}
export default ViewProfile;