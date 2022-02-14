import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { ListGroup,ListGroupItem,Button} from "react-bootstrap";
import { GlobalContext } from "../Context/GlobalState";

const UserList=()=>{
   
    const {users,removeUser}=useContext(GlobalContext);
    console.log(users);

    return(
        <div>
            <ListGroup className="mt-4">
                {users.map(user=>(
                      <ListGroupItem className="d-flex">
                      <strong>{user.name}</strong>
                      <div className="ml-auto"> &nbsp;
                          <Link  className="btn btn-primary mr-1" to={`/edit/${
                              user.id}`}>Edit</Link>&nbsp;
                          <Button onClick={() => removeUser(user.id)} 
                          color="danger">Delete</Button>
                      </div>
                      </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default UserList ;