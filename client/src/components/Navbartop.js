import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,

  Row,
  Col,
  Input,
  Button,
  Fa,
  Modal,
  ModalBody,
  ModalFooter,
  Container
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbartop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      modal: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="grey darken-4" dark expand="md" scrolling>
          <NavbarBrand href="/">
            <h1 class="h1-responsive white-text">LIFT</h1>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              <Container>
                <Row>
                  <Col md="6">
                    <Button
                      color="btn red darken-4 btn-rounded waves-effect"
                      onClick={this.toggle}
                    >
                      Login
                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className="cascading-modal"
                      >
                        <div className="modal-header red darken-4 white-text">
                          <h4 className="title">
                            <Fa className="fa fa-sign-in" />Login
                          </h4>
                          <button
                            type="button"
                            className="close"
                            onClick={this.toggle}
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <ModalBody className="grey-text">
                          <Input
                            size="sm"
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <Input
                            size="sm"
                            label="password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            error="wrong"
                            success="right"
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="red darken-4" onClick={this.toggle}>
                            Close
                          </Button>{" "}
                          <Button color="red darken-4">Login</Button>
                        </ModalFooter>
                      </Modal>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </NavbarNav><Button
            type="button"
            class="btn red darken-4 btn-rounded waves-effect"
          >
            SignUp
          </Button>
          </Collapse>
          
        </Navbar>
      </Router>
    );
  }
}

export default Navbartop;
