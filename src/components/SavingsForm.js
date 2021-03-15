import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Label, Col, Table } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Form, Field } from 'react-final-form'

class SavingsForm extends Component {

    handleSubmit = (values) => {

        this.props.onSubmit(values);
    }

    render() {

        const { description, amount, frequency, enable } = this.props.saving ? this.props.saving : '';
        
        return (
            <div className="container mt-5">
                <div className="container">
                <Form
                    onSubmit={values => this.handleSubmit(values)}
                    initialValues={{ 
                        description, 
                        amount, 
                        frequency, 
                        enable
                     }}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="description" style={{color: "yellowgreen"}} md={2}>Description</Label>
                                <Col md={10}>
                                    <Field name="description" component="input" placeholder="Description" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="amount" style={{color: "yellowgreen"}} md={2}>Amount</Label>
                                <Col md={10}>
                                    <Field name="amount" component="input" placeholder="Amount" parse={(value)=>parseFloat(value)}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="frequency" style={{color: "yellowgreen"}} md={2} >Frequency</Label>
                                <Col md={10}>
                                    <Field name="frequency" component="input" placeholder="Frequency" parse={(value)=>parseInt(value)}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="enable" style={{color: "yellowgreen"}} md={2}>Enable</Label>
                                <Col md={10}>
                                    <Field name="enable" component="input" placeholder="Enable" type="checkbox"/>
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
                                </Col>
                            </Row>
                        </form>
                    )}/>                   
                </div>
            </div>
        )
    }
}

export default withRouter(SavingsForm);
