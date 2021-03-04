import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Label,Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIncome  } from '../actions/ActionCreators';
import { NavLink, Link } from 'react-router-dom';

const isNumber = val => !isNaN(+val);
const required = val => val && val.length;
class Income extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            startDate: new Date()
         
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(values) {

  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.state.startDate);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(this.state.startDate);
        const date = `${day}-${month}`
        const data = {...values, payDay: day, payMonth: month}
        this.props.addIncome(data)
        this.props.history.push("/home");

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
            <div className="container">
                    <LocalForm name="incomeForm" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Col md={3}>
                            <Label htmlFor="income" onClick={this.revealInput}>
                                Net income 
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
                        <Col md={3}>
                            <Label htmlFor="cycle" onClick={this.revealInput}>

                                pay cycle
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
                        <Col>
                        <Label htmlFor="payday" onClick={this.revealInput}>

                        Next pay date
                        </Label>
                        
                            <DatePicker
                                    model=".payday"
                                    name="payday"
                                    selected={ this.state.startDate }
                                    onChange={ this.handleChange }
                                    name="startDate"
                                    dateFormat="MM-dd-yyyy"
                                    calendarWeeks={true}
                                    inputPlaceholder="Select a date"
                                />
                        
                        </Col>
        
                    </Row>
                    <Row className="form-group">
                                <Col className="col-3 col-md-1 " >                             
                                    <Button className="text-white" type="submit"  style={{background: " #1CB5E0",border: "none",color: "white !important "}} color="primary" disabled={false} onClick={this.disableBtn}>
                                        Submit
                                    </Button>
                                </Col>  
                            <Link to='/bills'> 
                                <Button className="" color="secondary" style={{background: "black"}} disabled={false}>
                                    Next
                                </Button>
                            </Link>
                            <Link to='/profile'> 
                            <Button className="" color="secondary" style={{background: "black"}} disabled={false}>
                                back
                            </Button>
                        </Link>
                    </Row>
                </LocalForm>
            </div>
        )
    }
}
const mapStateToProps = state =>({ income: state.income })

const mapDispatchToProps = {
    addIncome
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Income));