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

            <Navbar light sticky="top" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link text-white" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-white" to="/bills">
                                    <i className="fa fa-list fa-lg" /> Bills
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-white" to="/Income">
                                    <i className="fa fa-list fa-lg" /> Income
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-white" to="/addSavings">
                                    <i className="fa fa-list fa-lg" /> Savings
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-white" to="/profile">
                                    <i className="fa fa-list fa-lg" /> Profile 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-white" to="/dashboard">
                                    <i className="fa fa-list fa-lg" /> Dashboard 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-white" to="/manager">
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