import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron,} from 'reactstrap';
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
                                    <i className="fa fa-home fa-lg" /> // Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/bills">
                                    <i className="fa fa-list fa-lg" /> Bills
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/income">
                                    <i className="fa fa-list fa-lg" /> Income
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/savings">
                                    <i className="fa fa-list fa-lg" /> Savings
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/profile">
                                    <i className="fa fa-list fa-lg" /> Profile //
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/dashboard">
                                    <i className="fa fa-list fa-lg" /> Dashboard //
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/manager">
                                    <i className="fa fa-list fa-lg" /> Manager //
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