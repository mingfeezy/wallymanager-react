import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Label,Button } from 'reactstrap';
import Header from './headerComponent';



const isNumber = val => !isNaN(+val);

 class BillsForm extends Component {
     constructor(props) {
         super(props) 
         this.state = {
             carBillInput: false,
             rentBillInput: false,
             wirelessBillInput: false,
             netflixBillInput: false,
       
         }
         this.revealInput = this.revealInput.bind(this);
     }
    
    revealInput(e) {
 
        let input = e.target.htmlFor;
        this.setState({[input]: !this.state[input]})
      
    
    }
    handelSubmit(values) {
        console.log(values)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <LocalForm name="billsform" onSubmit={(values) => this.handelSubmit(values)}>
                        <Row className="form-group">
                            <Col md={3}>
                                <Label htmlFor="carBillInput" onClick={this.revealInput}>
                                    Car note
                                </Label>
                                {this.state.carBillInput ? <div><Control.text 
                                    name="carBillInput"
                                    model=".carBillInput"
                                    className="form-control"
                                    placeholder="0.00$" 
                                    validators={{
                                        isNumber
                                    }}     
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".carBillInput"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            isNumber: 'Must be a number'      
                                        }}
                                    />
                                    </div>: <div />}                      
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="rentBillInput" onClick={this.revealInput}>
                                    <img />
                                    Rent
                                </Label>
                                {this.state.rentBillInput ? <div><Control.text 
                                    name="rentBillInput"
                                    model=".rentBillInput"
                                    className="form-control"
                                    placeholder="0.00$" 
                                        validators={{
                                        isNumber
                                }}     
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".rentBillInput"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        isNumber: 'Must be a number'
                                    
                                    }}
                                    />
                                    </div>: <div />}     
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="wirelessBillInput" onClick={this.revealInput}>
                                
                                <img />
                                Wireless
                                </Label>
                                {this.state.wirelessBillInput ? <div><Control.text 
                                    name="wirelessBillInput"
                                    model=".wirelessBillInput"
                                    className="form-control"
                                    placeholder="0.00$"    
                                    validators={{
                                        isNumber
                                }}     
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".wirelessBillInput"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        isNumber: 'Must be a number'
                                    
                                    }}
                                    />
                                    </div>: <div />}     
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="netflixBillInput" onClick={this.revealInput}>
                                
                                <img />
                                Netflix
                                </Label>
                                {this.state.netflixBillInput ? <div><Control.text 
                                    name="netflixBillInput"
                                    model=".netflixBillInput"
                                    className="form-control"
                                    placeholder="0.00$"  
                                    validators={{
                                        isNumber
                                }}     
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".netflixBillInput"
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
                        </Row>
                    </LocalForm>
                </div>
            </div>
     
        )
    }

}

export default BillsForm;
