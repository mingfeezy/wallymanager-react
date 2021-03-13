import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Label, Col, Table } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink, Link } from 'react-router-dom';
import { addProfile } from '../actions/ActionCreators'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Profile extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            nextBtn: true,
            nextBtnColor: 'black'
        }
    }

    handleSubmit = (values) => {
        this.props.addProfile(values);
        this.setState({
            nextBtn: false,
            nextBtnColor: 'darkblue'
        })
        this.props.history.push('/income')
    }



    render() {
        return (
            <>
            <h1>Profile</h1>
            <div className="container mt-5">
                <div className="container">
                    <LocalForm name="Account form" onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" style={{color: "yellowgreen"}} md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2} style={{color: "yellowgreen"}}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" style={{color: "yellowgreen"}} md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="userName" style={{color: "yellowgreen"}} md={2}>Username</Label>
                                    <Col md={10}>
                                        <Control.text model=".userName" id="userName" name="userName"
                                            placeholder="Username"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".userName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="password" style={{color: "yellowgreen"}} md={2}>Password</Label>
                                    <Col md={10}>
                                        <Control.text model=".password" id="password" name="password"
                                            className="form-control"
                                            placeholder="6 caracters minimum"
                                        />
                                    </Col>
                                </Row>                    
                                <Row className="offset-md-10 offset-5 mt-5"> 
                                    <Link to='/home'> 
                                        <Button className="col" color="secondary" style={{background: 'none', border: 'none', color: 'whitesmoke'}}>
                                            <i className="fa fa-arrow-left  mr-1" style={{color: 'cyan'}} /> Back
                                        </Button>
                                    </Link>    
                                    
                                        <Button className="col direction-btn" color="secondary" type="submit" style={{background: 'none', border: 'none', color: 'whitesmoke'}}>
                                            Next <i className="fa fa-arrow-right  ml-1" style={{color: 'cyan'}} />
                                        </Button>
               
                                    
                                </Row>
                            </LocalForm>
                    </div>
                </div>
            </>                                
        )
    }
                                            
}

const mapStateToProps = state =>({ profile: state.profile })

const mapDispatchToProps = {
    addProfile
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
