import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Row, Col, Label,Button } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addBills } from '../actions/ActionCreators'
import { NavLink, Link } from 'react-router-dom';




const isNumber = val => !isNaN(+val);

 class Bills extends Component {
     constructor(props) {
         super(props) 
         this.state = {
             car: false,
             rent: false,
             phone: false,
            //  netflixBillInput: false,
             misc: false,
       
         }
         this.revealInput = this.revealInput.bind(this);
     }
    
    revealInput(e) {
 
        let input = e.target.htmlFor;
        this.setState({[input]: !this.state[input]})
      
    
    }
    handelSubmit(values) {
        console.log(values)
        this.props.addBills(values);
        this.props.history.push("/home");
    }
    disableBtn = (e) => {
        e.target.disabled = true
    }
    render() {
        return (
            <div>

                <div className="container">
                    <LocalForm name="billsform" onSubmit={values => this.handelSubmit(values)}>
                        <Row className="form-group">
                            <Col md={3} className="billBox">
                                <Label htmlFor="car" onClick={this.revealInput} className="billsLabel" id="carLabel" />
                                {this.state.car ? <div><Control.text 
                                    name="car"
                                    model=".car"
                                    className="form-control"
                                    placeholder="0.00$" 
                                    validators={{
                                        isNumber
                                    }}     
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".car"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            isNumber: 'Must be a number'      
                                        }}
                                    />
                                    </div>: <div />}                      
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="rent" onClick={this.revealInput} className="billsLabel" id="rentLabel" />
                                {this.state.rent ? <div><Control.text 
                                    name="rent"
                                    model=".rent"
                                    className="form-control"
                                    placeholder="0.00$" 
                                        validators={{
                                        isNumber
                                }}     
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".rent"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        isNumber: 'Must be a number'
                                    
                                    }}
                                    />
                                    </div>: <div />}     
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="phone" onClick={this.revealInput} className="billsLabel" id="phoneLabel"/>
                                {this.state.phone ? <div><Control.text 
                                    name="phone"
                                    model=".phone"
                                    className="form-control"
                                    placeholder="0.00$"    
                                    validators={{
                                        isNumber
                                }}     
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".phone"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        isNumber: 'Must be a number'
                                    
                                    }}
                                    />
                                    </div>: <div />}     
                            </Col>
                           
                            <Col md={3}>
                                <Label htmlFor="misc" onClick={this.revealInput} className="billsLabel" id="miscLabel" />
                                {this.state.misc ? <div><Control.text 
                                    name="misc"
                                    model=".misc"
                                    className="form-control"
                                    placeholder="0.00$"  
                                    validators={{
                                        isNumber
                                }}     
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".misc"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        isNumber: 'Must be a number'
                                    
                                    }}
                                    />
                                    </div>: <div />}     
                            </Col>
                        </Row>
                        <Row className="form-group">
                                    <Col className="col-3 col-md-1 " >                             
                                        <Button className="text-white" type="submit"  style={{background: " #1CB5E0",border: "none",color: "white !important "}} color="primary" disabled={false}>
                                            Submit
                                        </Button>
                                    </Col>  
                                    <Link to='/income'> 
                                    <Button className="" color="secondary" style={{background: "black"}} disabled={false}>
                                        back
                                    </Button>
                                </Link>
                                <Link to='/savings'> 
                                <Button className="" color="secondary" style={{background: "black"}} disabled={false}>
                                    Next
                                </Button>
                            </Link>
                                    
                        </Row>
                    </LocalForm>
                </div>
            </div>
     
        )
    }

}

const mapStateToProps = state => ({ bills: state.bills })
const mapDispatchToProps = {
    addBills
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bills));
