import React from "react";
import NavBar from '../NavBar';
import "./Reports.css";
import Form from 'react-bootstrap/Form';


class Reports extends React.Component
{
    render()
    { return(
        <div><NavBar />
        <div className="container">
        
      <h2>REPORT</h2>
  <Form.Label htmlFor="exampleColorInput"></Form.Label>
  <Form.Control
    data-provide="datepicker"
    type="date"
    id="select date"
    defaultValue="DD/MM/YYYY"
    title="date"
  /> <br/>
     </div>

</div>
    )
    }

}
export default Reports;