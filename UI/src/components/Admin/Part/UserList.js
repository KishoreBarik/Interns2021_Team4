import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { ListGroup,ListGroupItem,Button} from "react-bootstrap";
import { GlobalContext } from "../Context/GlobalState";
import Table from 'react-bootstrap/Table';

const UserList=()=>{
   
    const {users,removeUser}=useContext(GlobalContext);
    console.log(users);

    return(
        <div className="Container">
            <div className="row">
                <div className="col">
                </div>
                <br/>
                <div className="col-7">
                <Link className="jhhh" to="/adduser">Add User</Link>
                <Table striped bordered hover>
        
        <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Other</th>
               </tr>
       </thead>
        <tbody>
        {users.map(user=>(
              <tr>
                  <td><strong>{user.name}</strong></td>
                  <td><strong>{user.last}</strong></td>
                  <td><strong>{user.email}</strong></td>
                  <td><Link  className="btn btn-primary mr-1" to={`/edit/${
                              user.id}`}>Edit</Link>&nbsp;
                          <Button onClick={() => removeUser(user.id)} 
                          color="danger">Delete</Button></td>
               </tr>
               ))}
        </tbody>            
  </Table>
            </div>
            <div className="col"></div>
            </div>
        </div>
    );
}

export default UserList ;