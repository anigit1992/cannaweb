/**
 * Created by Ani on 7/9/2017.
 */
import React, { PureComponent } from 'react';

import ImageBox from './ImageBox.js';
import {Navbar, Nav, NavItem,NavDropdown, Carousel,  MenuItem} from 'react-bootstrap';
class Collaction extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="gallery-menu container">

            <Navbar collapseOnSelect>
                    <Nav className="nav flex-md-row nav-center gallery-menu  flex-wrap">
                        <NavItem eventKey={1} href="#" className="">All</NavItem>
                        <NavItem eventKey={2} href="#">necklaces</NavItem>
                        <NavItem eventKey={3} href="#">bracelets</NavItem>
                        <NavItem eventKey={4} href="#">earings</NavItem>
                        <NavItem eventKey={5} href="#">broochs</NavItem>

                    </Nav>

            </Navbar>
                <ImageBox/>
                <ImageBox/>
                <ImageBox/>
                <ImageBox/>
                <ImageBox/>
                <ImageBox/>
        </div>);

    };

}

export default Collaction;/**
 * Created by Ani on 7/9/2017.
 *//**
 * Created by Ani on 7/14/2017.
 */
