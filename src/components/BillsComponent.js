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
import { getNextPayDate } from '../actions/ActionCreators'

import { NavLink, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';


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
             insurancesBillDay: 1,
        
             billsName: [],
             billsValues: [],
             billsDates: [],
             nextBtn: true,
             nextBtn: true,
            nextBtnColor: 'black'
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
        const dayWireless = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.state.wirelessBillDate);
        const monthWireless = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(this.state.wirelessBillDate);
        const data = {...values, dayCar: dayCar,monthCar: monthCar,dayRent: dayRent,monthRent: monthRent, monthWireless: monthWireless, dayWireless: dayWireless}
        console.log(values)
        console.log(data)
        this.props.addBills(data);
        this.props.getNextPayDate(this.props.income[0].income, this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth)
        this.setState({
            nextBtn: false,
            nextBtnColor: 'darkblue'
        })
        this.props.history.push('/addSavings')
    
        
    }
    handleFormChanges(values) {
        
        this.setState({
            billsName: Object.keys(values),
            billsValues: Object.values(values)
        })
    }
//   MAKE IT AWAIT INSTEAD OF 3 FNS
     handleChangeBillDate(date, e ) {
         let target = e.target.name
        this.setState({
            target: date
        })
    }
    handleCarBillDate = (date) => 
        this.setState({carBillDate: date})
    handleRentBillDate = (date) => 
        this.setState({rentBillDate: date})
    handleWirelessBillDate = (date) => 
        this.setState({wirelessBillDate: date})
    
    disableBtn = (e) => {
        e.target.disabled = true
    }
    render() {
        const billNames = this.state.billsName.map((bill, i) => {
            // console.log(bill)
            return (            
                     <th key={i}>{bill}</th>         
            )
        });
        const billValues = this.state.billsValues.map((value, i) => {
            // console.log(value)
            return ( <td key={i}>{value}</td>)            
        });
        const billDates = this.state.billsDates.map((date,i) => {
       
            return (
                <td key={i}>{date}</td>
            )
        });

        return (
            <div>

                <div className="container custom-margin">
                    <LocalForm name="billsform" onSubmit={values => this.handelSubmit(values)} onChange={values => this.handleFormChanges(values)}>
                        <Row className="form-group">
                            
                            <Col md={3}>
                                <Card style={{background: 'none', color: 'white', border: 'solid 2px cyan', borderRadius: '10px'}}>   
                                    <CardBody className="p-3">
                                        <CardTitle><h4>Car</h4></CardTitle>
                                        <CardSubtitle style={{color: "chartreuse"}}>Your car note monthly amount</CardSubtitle>
                                        <CardText className="my-3">
                                            <Control.text   
                                                style={{border: "solid 1px darkblue", borderRadius: "10px"}}         
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
                                            <div className="customDatePickerWidthInput customDatePickerWidth">
                                                <DatePicker
                                                    
                                                    // wrapperClassName="datePicker"
                                                    className="form-control borderPicker"
                                                    model=".carBillDate"
                                                    name="carBillDate"
                                                    selected={ this.state.carBillDate }
                                                    onChange={this.handleCarBillDate}
                                                    name="carBillDate"
                                                    dateFormat= "MM-dd-yyyy"
                                                    calendarWeeks={true}
                                                    placeholderText="Select a date "
                                                />    
                                            </div>                
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
            
                            <Col md={3}>
                            <Card style={{background: 'none', color: 'white', border: 'solid 2px cyan', borderRadius: '10px'}}>   
                                <CardBody  className="p-3">
                                    <CardTitle><h4>Rent</h4></CardTitle>
                                    <CardSubtitle style={{color: "chartreuse"}}>Your rent monthly payment</CardSubtitle>
                                    <CardText className="my-3">
                                        <Control.text  
                                            style={{border: "solid 1px darkblue", borderRadius: "5px"}}          
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
                                        <div className="customDatePickerWidthInput customDatePickerWidth">
                                            <DatePicker
                                                
                                            
                                                className="form-control borderPicker"
                                                model=".rentBillDate"
                                                name="rentBillDate"
                                                selected={ this.state.rentBillDate }
                                                onChange={ this.handleRentBillDate }
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
                            <Card style={{background: 'none', color: 'white', border: 'solid 2px cyan', borderRadius: '10px'}}>   
                                <CardBody  className="p-3">
                                    <CardTitle><h4>Wireless</h4></CardTitle>
                                    <CardSubtitle style={{color: "chartreuse"}}>Your phone monthly payment.</CardSubtitle>
                                    <CardText className="my-3">
                                        <Control.text
                                            style={{border: "solid 1px darkblue", borderRadius: "5px"}}            
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
                                        <div className="customDatePickerWidthInput customDatePickerWidth">
                                            <DatePicker
                                                
                                                // style={{border: 'solid 1px white'}}
                                                wrapperClassName="datePicker"
                                                className="form-control borderPicker"
                                                model=".wirelessBillDate"
                                                name="wirelessBillDate"
                                                selected={ this.state.wirelessBillDate }
                                                onChange={ this.handleWirelessBillDate }
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
                        <Card style={{background: 'none', color: 'white', border: 'solid 2px cyan', borderRadius: '10px'}}>   
                            <CardBody  className="p-3">
                                <CardTitle><h4>Insurances</h4></CardTitle>
                                <CardSubtitle style={{color: "chartreuse"}}> All your insurances payments.</CardSubtitle>
                                <CardText className="my-4">
                                    <Control.text  
                                        style={{border: "solid 1px darkblue", borderRadius: "5px"}}         
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
                                    <div>
                                        <CardSubtitle style={{color: "whitesmoke"}} className="mt-2 mb-4">First of every month </CardSubtitle>
                                    </div>                
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>    
                           
          
                   
                    </Row>
                    <Row className="offset-md-10 offset-5 mt-5">                         
                        <Link to='/addIncome'> 
                            <Button className="col" color="secondary" style={{background: 'none', border: 'none', color: 'whitesmoke', }} disabled={false}>
                                <i className="fa fa-arrow-left" style={{color: 'cyan'}} /> Back
                            </Button>
                        </Link>
                       
                            <Button className="col" color="secondary" type="submit" style={{background: 'none', border: 'none', color: 'whitesmoke', marginLeft: '-50px'}} >
                                Next <i className="fa fa-arrow-right " style={{color: 'cyan'}} />
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

const mapStateToProps = state => ({ bills: state.bills, income: state.income })
const mapDispatchToProps = {
    addBills,
    getNextPayDate
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bills));
