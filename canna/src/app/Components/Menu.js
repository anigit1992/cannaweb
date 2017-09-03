import React, { PureComponent } from 'react';
import {Navbar, Nav, NavItem,NavDropdown,  MenuItem} from 'react-bootstrap';
import  Logo from './logo';
import News from './news.js';
require("react-bootstrap/lib/NavbarHeader");
require("react-bootstrap/lib/NavbarBrand");


class Menu extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <Navbar collapseOnSelect container-fluid >
                <Navbar.Header>
                    <Navbar.Brand>
                       <Logo/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav className="nav flex-md-row navbar-right ">
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={2} href="#">news</NavItem>
                        <NavItem eventKey={3} href="#">collection</NavItem>
                        <NavItem eventKey={4} href="#">video</NavItem>
                        <NavItem eventKey={5} href="#">contact</NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
export default Menu;