import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
        }
    }

    render() {
        return (
            <div>
            <React.Fragment>
            <Jumbotron fluid>
       
            </Jumbotron>

            <Navbar light sticky="top" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/billsForm">
                                    <i className="fa fa-list fa-lg" /> BillsForm
                                </NavLink>
                            </NavItem>
                 
                        </Nav>

                    </Collapse>
                </div>
            </Navbar>
           
        </React.Fragment>
            </div>
        )
    }
}
export default Header;