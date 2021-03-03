import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Label,Button } from 'reactstrap';




const isNumber = val => !isNaN(+val);

 class Bills extends Component {
     constructor(props) {
         super(props) 
         this.state = {
             carBillInput: false,
             rentBillInput: false,
             wirelessBillInput: false,
             netflixBillInput: false,
             gasElecWatBillInput: false,
       
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

                <div className="container">
                    <LocalForm name="billsform" onSubmit={(values) => this.handelSubmit(values)}>
                        <Row className="form-group">
                            <Col md={3} className="billBox">
                                <Label htmlFor="carBillInput" onClick={this.revealInput} className="billsLabel">
                                    Car 
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
                                <Label htmlFor="rentBillInput" onClick={this.revealInput} className="billsLabel">
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
                                <Label htmlFor="wirelessBillInput" onClick={this.revealInput} className="billsLabel">
                           
                                    Phone
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
                                <Label htmlFor="gasElecWatBillInput" onClick={this.revealInput} className="billsLabel">
                                
                                <img />
                                Misc
                                </Label>
                                {this.state.gasElecWatBillInput ? <div><Control.text 
                                    name="gasElecWatBillInput"
                                    model=".gasElecWatBillInput"
                                    className="form-control"
                                    placeholder="0.00$"  
                                    validators={{
                                        isNumber
                                }}     
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".gasElecWatBillInput"
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

export default Bills;
