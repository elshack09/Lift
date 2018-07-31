import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText, CardImg
} from "reactstrap";

class Profileform extends React.Component {
  render() {
    return (
      <Form>
        <CardImg className="img-fluid"src="https://images.unsplash.com/photo-1511810119369-d499bbf2a325?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575da372a42044cb2a6ecef8118ae877&auto=format&fit=crop&w=400&q=60"></CardImg>
        <FormGroup row>
          <Label for="exampleName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input type="text" name="full-name" id="exampleName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="dob" sm={2}>
            Date of Birth
          </Label>
          <Col sm={10}>
            <Input type="text" name="dob" id="exampleDOB" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="weight" sm={2}>
            Weight
          </Label>
          <Col sm={10}>
            <Input type="text" name="weight" id="exampleWeight" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Add Profile Picture
            </FormText>
          </Col>
        </FormGroup>
        
        
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button  href="/exercises" className="btn red darken-4 btn-rounded waves-effect">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Profileform;
