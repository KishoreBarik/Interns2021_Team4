import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { ListGroup,ListGroupItem,Button} from "react-bootstrap";
import { GlobalContext } from "../Context/GlobalState";

const UserList=()=>{
   
    const {users,removeUser}=useContext(GlobalContext);
    console.log(users);

    return(
        <div className="Container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col-7">
            <ListGroup className="mt-4">
                {users.map(user=>(
                      <ListGroupItem className="d-flex">
                      <strong>{user.name}   {user.last}    {user.email}
                      </strong>
                      <div className="jss"> &nbsp;
                          <Link  className="btn btn-primary mr-1" to={`/edit/${
                              user.id}`}>Edit</Link>&nbsp;
                          <Button onClick={() => removeUser(user.id)} 
                          color="danger">Delete</Button>
                      </div>
                      </ListGroupItem>
                ))}
            </ListGroup>
            </div>
            <div className="col"></div>
            </div>
        </div>
    );
}

export default UserList ;