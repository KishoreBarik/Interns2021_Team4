import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


class ForgotPassword extends React.Component
{
    constructor(){
      super();
      this.state={
        input:{},
        msg:{},
      };
      this.pwdConfirm=this.pwdConfirm.bind(this);
      this.handlesubmit=this.handlesubmit.bind(this);
    };

    pwdConfirm(e){
        var inputpwd=this.state.input;
        inputpwd[e.target.name]=e.target.value
        this.setState({
          inputpwd
        });
    };

//Validation,if passwords are not same throw an error
    validation(){
      var msg={};
      if(this.state.input["passwd"]!==this.state.input["confirmpwd"])
      {
        msg["passwd"]="Enter same password for both ! mismatched"
      }
      else{
        msg["confirmpwd"]="Passwords are same...." 
      }
      this.setState({
        msg:msg
      });
    };

    //form submition
    handlesubmit(e){
      e.preventDefault();
      if(this.validation())
      {
        var input={};
        input["passwd"]="";
        input["confirmpwd"]="";
     };

    };
    render()
    {
    return ( 
      <div>  <NavBar />
      <div className="container">
        <br/><br/><br/>
        <div className="row">
          <div className="col">
            <p></p>
          </div>

      <div className="col-4">
      <div className="card text-center center p-3  d-flex justify-content-center">

      <div className="matter ">
        <Form onSubmit={this.handlesubmit}>
          <div className="form-group">
            <label className="form-label">New Password</label>
            <input type="password" 
            name="passwd" 
            value={this.state.input.passwd}
            onChange={this.pwdConfirm}
            className="form-control" 
            placeholder="Enter the New Password" required />
          </div><br/>

          <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input type="password"
            className="form-control"
            name="confirmpwd"
            value={this.state.input.confirmpwd}
            onChange={this.pwdConfirm}
            placeholder="Confirm Password" required/>
          </div> <br/>

        <strong>
        <div className="text-danger">{this.state.msg.passwd}</div>
        <div className="text-success">{this.state.msg.confirmpwd}</div>
        </strong>
          

          <div>
            <Button className="button" variant="primary"
                 type="submit"
                 onChange={this.handlesubmit}>
             UPDATE
            </Button> <br/>
            <Link to="/LoginPage" className="home">Return to login</Link>
            </div>
      </Form>
      
      </div>
      </div>
      </div>
    
     <div className="col"></div>

     </div>
    
     </div>
      </div>
    );
    };
};

export default ForgotPassword;