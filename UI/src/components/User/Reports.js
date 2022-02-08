import React from "react";
import NavBar from '../NavBar';
import "./Reports.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'

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

<Card style={{ width: '35rem' }}>
  <Card.Body>
    <Card.Title>Project 1  <Button>Add Task</Button></Card.Title>
    <Card.Text>
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      hello
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
     hello
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Card.Text>
  </Card.Body>
</Card>
     </div>

</div>
    )
    }

}
export default Reports;