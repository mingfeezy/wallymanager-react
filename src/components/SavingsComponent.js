import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Label, Col, Table } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink, Link } from 'react-router-dom';
import { addSavings } from '../actions/ActionCreators'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class Savings extends Component {

    handleSubmit = (values) => {
        this.props.addSavings(values);
        this.props.history.push("/dashboard");
    }


    render() {
        return (
            <div className="container mt-5">
                <div className="container">
                    <LocalForm name="Account form" onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="savingsName" style={{color: "yellowgreen"}} md={2}>Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".name" id="name" name="name"
                                            placeholder="Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
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
                                    <Label htmlFor="amount" md={2} style={{color: "yellowgreen"}}>Amount</Label>
                                    <Col md={10}>
                                        <Control.text model=".amount" id="amount" name="amount"
                                            type="number"
                                            placeholder="Amount"
                                            className="form-control"
                                            validators={{
                                                required
                                                
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".amount"
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
                                    <Label htmlFor="frequency" style={{color: "yellowgreen"}} md={2}>Frequency</Label>
                                    <Col md={10}>
                                        <Control.text model=".frequency" id="frequency" name="frequency"
                                            type="number"
                                            placeholder="Frequency"
                                            className="form-control"
                                            validators={{
                                                required
                                               
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".frequency"
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
                                    <Label htmlFor="enable" style={{color: "yellowgreen"}} md={2}>Enable</Label>
                                    <Col md={1}>
                                        <Control.checkbox model=".enable" id="enable" name="enable"
                                            className="form-control"
                                            defaultValue= {true}
                                            validators={{
                                            
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".enable"
                                            show="touched"
                                            component="div"
                                            messages={{
                                               
                                            }}
                                        />
                                    </Col>
                                </Row>            
                                <Row className="form-group">
                                    <Col className="col-12 text-right" >
                                        <Link to='/'> 
                                            <Button className="" color="secondary" style={{background: "black"}} disabled={false}>
                                                Cancel
                                            </Button>
                                        </Link>
                                 
                                        <Button className="ml-2" type="submit" style={{background: "black",border:"solid 1px yellowgreen"}} disabled={false}>
                                            Submit
                                        </Button>
                                   
                               
                                    {/* {renderButton} */}
                                    </Col>                           
                                    <Col>
                                   
                                    {/* {renderButton} */}
                                    </Col>                           
                                </Row>
                            </LocalForm>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state =>({ savings: state.savings })

const mapDispatchToProps = {
    addSavings
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Savings));
