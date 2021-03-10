import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Label,Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIncome, getNextPayDate  } from '../actions/ActionCreators';

import { NavLink, Link } from 'react-router-dom';

const isNumber = val => !isNaN(+val);
const required = val => val && val.length;
class Income extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            startDate: new Date(),
            nextBtn: true,
            nextBtnColor: 'black'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(values) {

        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.state.startDate);
        const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(this.state.startDate);
        const date = `${day}-${month}`
        const data = {income: values.income,cycle: values.cycle, payDay: day, payMonth: month}

        this.props.addIncome(data)
        // this.props.getNextPayDate(data)
        // this.props.history.push("/home");
        this.setState({
            nextBtn: false,
            nextBtnColor: 'darkblue'
        })

    }
    handleChange(date) {
        this.setState({
          startDate: date
        })
     
      }
    //   disableBtn = (e) => {
    //     e.target.disabled = true
    // }
    
    render() {
        return (
        
                <LocalForm name="incomeForm" className="container mt-5" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Col md={4}>
                            <Label htmlFor="income">
                                <h4>Net income </h4>
                            </Label>
                            <Control.text
                                id="income" 
                                name="income"
                                model=".income"
                                className="form-control"
                                placeholder="0.00$" 
                                validators={{
                                    required,
                                    isNumber
                                }}     
                                />
                                <Errors
                                    className="text-danger"
                                    model=".income"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        isNumber: 'Must be a number'      
                                    }}
                                />
                                                    
                        </Col>
                        <Col md={4}>
                            <Label htmlFor="cycle">
                                <h4>Pay cycle</h4>
                            </Label>
                            <Control.select 
                                id="cycle"
                                name="cycle"
                                model=".cycle"
                                className="form-control">
                                <option value="7">weekly</option>
                                <option value="15">Bi weekly</option>
                                <option value="30">Monthly</option>
                            </Control.select>                          
                        </Col>
                        <Col md={4}>
                            <Label htmlFor="payday">

                                <h4>Next pay date</h4>
                            </Label>
                             
                            <div className="customDatePickerWidth">
                                <DatePicker
                                    className="dateP"
                                    model=".payday"
                                    name="payday"
                                    selected={ this.state.startDate }
                                    onChange={ this.handleChange }
                                    name="startDate"
                                    dateFormat="MM-dd-yyyy"
                                    calendarWeeks={true}
                                    inputPlaceholder="Select a date"
                                    />
                            </div> 
                               
                        
                        </Col>
        
                    </Row>
                    <Row className="offset-md-9 offset-5 mt-5">  
                    
                        <Link to='/home'> 
                            <Button className="col" color="secondary" style={{background: 'none', border: 'none', color: 'darkblue'}} disabled={false}>
                                <i className="fa fa-arrow-left" style={{color: 'darkblue'}} /> back
                            </Button>
                        </Link>
                        <Link to='/bills'> 
                            <Button className="col" color="secondary" style={{background: 'none', border: 'none', color: this.state.nextBtnColor}} disabled={this.state.nextBtn}>
                                Next <i className="fa fa-arrow-right" style={{color: this.state.nextBtnColor}} />
                            </Button>
                        </Link>
                            <Button className="text-white" type="submit"  style={{backgroundColor: "green",border: "none",color: "white !important "}} color="primary" disabled={false} onClick={this.disableBtn}>
                                Confirm
                            </Button>
                                                    
                    </Row>
                </LocalForm>
            
        )
    }
}
const mapStateToProps = state =>({ income: state.income })

const mapDispatchToProps = {
    addIncome,
    getNextPayDate
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Income));