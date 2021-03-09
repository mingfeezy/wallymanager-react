import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Row, Col, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addBills } from '../actions/ActionCreators'
import { NavLink, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';



const isNumber = val => !isNaN(+val);
 class Bills extends Component {
     constructor(props) {
         super(props) 
         this.state = {
             car: false,
             rent: false,
             phone: false,
             gym: false,
             insurances: false,
             carBillDate: null,
             carBillDay: null,
             rentBillDate: null,
             rentBillDay: null,
             wirelessBillDate: null,
             wirelessBillDay: null,
             billsName: [],
             billsValues: [],
             billsDates: []
         }
         this.revealInput = this.revealInput.bind(this);
         this.handleChangeBillDate = this.handleChangeBillDate.bind(this);
  
     }
    
    revealInput(e) {
        let input = e.target.htmlFor;
        this.setState({[input]: !this.state[input]})
    }
    handelSubmit(values) {
        const dayCar = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.state.carBillDate);
        const monthCar = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(this.state.carBillDate);
        const dayRent = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.state.rentBillDate);
        const monthRent = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(this.state.rentBillDate);
        const data = {...values, dayCar: dayCar,monthCar: monthCar,dayRent: dayRent,monthRent: monthRent}
        console.log(values)
        this.props.addBills(data);
    }
    handleFormChanges(values) {
        
        this.setState({
            billsName: Object.keys(values),
            billsValues: Object.values(values)
        })
    }
    
    handleChangeBillDate(date) {
        if (this.state.billsDates.length === 3) {
            this.setState({
                billsDates: [...this.state.billsDates, new Intl.DateTimeFormat('en', { day: '2-digit', month: '2-digit' }).format(date), '03/01']
            })
        }
        this.setState({
            billsDates: [...this.state.billsDates, new Intl.DateTimeFormat('en', { day: '2-digit', month: '2-digit' }).format(date)]
        })
     
      }
    disableBtn = (e) => {
        e.target.disabled = true
    }
    render() {
        const billNames = this.state.billsName.map((bill, i) => {
            console.log(bill)
            return (            
                     <th key={i}>{bill}</th>         
            )
        });
        const billValues = this.state.billsValues.map((value, i) => {
            console.log(value)
            return ( <td key={i}>{value}</td>)            
        });
        const billDates = this.state.billsDates.map((date,i) => {
       
            return (
                <td key={i}>{date}</td>
            )
        });

        return (
            <div>

                <div className="container">
                    <LocalForm name="billsform" onSubmit={values => this.handelSubmit(values)} onChange={values => this.handleFormChanges(values)}>
                        <Row className="form-group">
                            
                            <Col md={3}>
                                <Card>   
                                    <CardBody style={{border: "solid 1px green", borderRadius: "5px"}} className="p-3">
                                        <CardTitle><h4>Car</h4></CardTitle>
                                        <CardSubtitle style={{color: "rgb(61, 53, 53)"}}>Your car note monthly amount</CardSubtitle>
                                        <CardText className="my-2">
                                            <Control.text           
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
                                            <div className="customDatePickerWidth">
                                                <DatePicker
                                                    style={{border: 'solid 1px white'}}
                                                    wrapperClassName="datePicker"
                                                    className="form-control borderPicker"
                                                    model=".carBillDate"
                                                    name="carBillDate"
                                                    selected={ this.state.carBillDate }
                                                    onChange={ this.handleChangeBillDate }
                                                    name="carBillDate"
                                                    dateFormat="MM-dd-yyyy"
                                                    calendarWeeks={true}
                                                    placeholderText="Select a date "
                                                />    
                                            </div>                
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
            
                            <Col md={3}>
                            <Card>   
                                <CardBody style={{border: "solid 1px green", borderRadius: "5px"}} className="p-3">
                                    <CardTitle><h4>Rent</h4></CardTitle>
                                    <CardSubtitle style={{color: "rgb(61, 53, 53)"}}>Your rent monthly payment</CardSubtitle>
                                    <CardText className="my-2">
                                        <Control.text           
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
                                        <div className="customDatePickerWidth">
                                            <DatePicker
                                                style={{border: 'solid 1px white'}}
                                                wrapperClassName="datePicker"
                                                className="form-control borderPicker"
                                                model=".rentBillDate"
                                                name="rentBillDate"
                                                selected={ this.state.rentBillDate }
                                                onChange={ this.handleChangeBillDate }
                                                name="rentBillDate"
                                                dateFormat="MM-dd-yyyy"
                                                calendarWeeks={true}
                                                placeholderText="Select a date "
                                            />    
                                        </div>                
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                            
                            <Col md={3}>
                            <Card>   
                                <CardBody style={{border: "solid 1px green", borderRadius: "5px"}} className="p-3">
                                    <CardTitle><h4>Wireless</h4></CardTitle>
                                    <CardSubtitle style={{color: "rgb(61, 53, 53)"}}>Your phone monthly payment.</CardSubtitle>
                                    <CardText className="my-2">
                                        <Control.text           
                                            name="wireless"
                                            model=".wireless"
                                            className="form-control"
                                            placeholder="0.00$" 
                                            validators={{
                                                isNumber
                                            }}     
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".wireless"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                isNumber: 'Must be a number'      
                                            }}
                                        />
                                        <div className="customDatePickerWidth">
                                            <DatePicker
                                                style={{border: 'solid 1px white'}}
                                                wrapperClassName="datePicker"
                                                className="form-control borderPicker"
                                                model=".wirelessBillDate"
                                                name="wirelessBillDate"
                                                selected={ this.state.wirelessBillDate }
                                                onChange={ this.handleChangeBillDate }
                                                name="wirelessBillDate"
                                                dateFormat="MM-dd-yyyy"
                                                calendarWeeks={true}
                                                placeholderText="Select a date "
                                            />    
                                        </div>                
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>  
                        <Col md={3}>
                        <Card>   
                            <CardBody style={{border: "solid 1px green", borderRadius: "5px"}} className="p-3">
                                <CardTitle><h4>Insurances</h4></CardTitle>
                                <CardSubtitle style={{color: "rgb(61, 53, 53)"}}> All your insurances payments.</CardSubtitle>
                                <CardText className="my-2">
                                    <Control.text           
                                        name="insurances"
                                        model=".insurances"
                                        className="form-control"
                                        placeholder="0.00$" 
                                        validators={{
                                            isNumber
                                        }}     
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".insurances"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            isNumber: 'Must be a number'      
                                        }}
                                    />
                                    <div className="customDatePickerWidth">
                                        <CardSubtitle style={{color: "rgb(61, 53, 53)"}} className="mt-2 mb-3">First of every month </CardSubtitle>
                                    </div>                
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>    
                           
          
                   
                    </Row>
                        <Row className="form-group ml-1">                         
                            <Link to='/addIncome'> 
                                <Button className="col" color="secondary" style={{background: "black"}} disabled={false}>
                                back
                                </Button>
                            </Link>
                            <Link to='/addSavings'> 
                                <Button className="col" color="secondary" style={{background: "black"}} disabled={false}>
                                Next
                                </Button>
                            </Link>                   
                                <Button className="text-white offset-6 offset-md-9" type="submit"  style={{background: " #1CB5E0",border: "none",color: "white !important "}} color="primary" disabled={false}>
                                    Confirm
                                </Button>
                        </Row>
                    </LocalForm>
                </div>
                <div className="container mb-5">
                    <div>
                        {this.state.billsName.length >= 1 ? <h3>Your bills</h3>: <div />}
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    {billNames} 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {billValues}
                                </tr>
                                <tr>
                                    {billDates}
                                </tr>
                            </tbody>            
                        </table>   
                    </div>
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
