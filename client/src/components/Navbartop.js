import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Button} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Navbartop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
           
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="grey darken-4" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <h1 class="h1-responsive white-text">LIFT</h1>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav middle>
                        <h2 class="h2-responsive white-text"><em>App for Beginners Weight Training</em></h2>
                        </NavbarNav>
                        <NavbarNav right>
                        <Button type="button" class="btn red darken-4 btn-rounded waves-effect">Login</Button>
                        <Button type="button" class="btn red darken-4 btn-rounded waves-effect">SignUp</Button>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Navbartop