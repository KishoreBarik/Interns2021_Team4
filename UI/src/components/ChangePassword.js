import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "./hooksLib";
import NavBar from "./NavBar";

export default function ChangePassword() {
  const [fields, handleFieldChange] = useFormFields({
    password: "",
    oldPassword: "",
    confirmPassword: "",
  });
  const [isChanging, setIsChanging] = useState(false);

  function validateForm() {
    return (
      fields.oldPassword.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleChangeClick(event) {
    event.preventDefault();
    handleFieldChange.oldPassword = "";

    //setIsChanging(true);

    try {
      /*const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentUser,
        fields.oldPassword,
        fields.password
      );*/
      //history.push("/settings");
    } catch (error) {
      // onError(error);
      setIsChanging(false);
    }
  }

  return (
    <div>
      <NavBar />

      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col"></div>
          <div className="col-4">
            <div className="card text-center center p-3  d-flex justify-content-center">
              <div className="matter ">
                <Form onSubmit={handleChangeClick} action="" method="">
                  <FormGroup bsSize="large" controlId="oldPassword">
                    <FormLabel>Old Password</FormLabel>
                    <FormControl
                      type="password"
                      onChange={handleFieldChange}
                      value={fields.oldPassword}
                      placeholder="Enter old password"
                    />
                  </FormGroup>
                  <br />
                  <FormGroup bsSize="large" controlId="password">
                    <FormLabel>New Password</FormLabel>
                    <FormControl
                      type="password"
                      onChange={handleFieldChange}
                      value={fields.password}
                      placeholder="Enter New Password"
                    />
                  </FormGroup>
                  <br />

                  <FormGroup bsSize="large" controlId="confirmPassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                      type="password"
                      onChange={handleFieldChange}
                      value={fields.confirmPassword}
                      placeholder="Enter to confirm"
                    />
                  </FormGroup>

                  <br />
                  <div className="cls">
                    <LoaderButton
                      block
                      type="submit"
                      bsSize="large"
                      disabled={!validateForm()}
                      isLoading={isChanging}
                    >
                      Change Password
                    </LoaderButton>
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
}
