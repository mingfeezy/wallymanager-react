import React, { Component } from 'react';
import { Row, Col, Label,Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'


class IncomeForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            startDate: new Date()
         
        }
    }

    handleSubmit = (values) => {
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.state.startDate);
        const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(this.state.startDate);
        const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(this.state.startDate);
        const date = `${month}-${day}-${year}`;
        const data = {...values, payDay: day, payMonth: month, date:date};
        this.props.onSubmit(data);
        this.props.history.push("/dashboard");
    }

    handleChange = (date) => {
        console.log(date);
        this.setState({
          startDate: date
        })
      }
    
    render() {
        const { income, cycle, date  } = this.props.incomeItem ? this.props.incomeItem : '';
        return (
            <div className="container mt-5">
                <div className="container">
                <Form
                    onSubmit={values => this.handleSubmit(values)}
                    initialValues={{ 
                        income,
                        cycle,
                        date
                    }}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Row className="form-group">
                            <Col md={3}>
                                <Label htmlFor="income" onClick={this.revealInput}>
                                    Net income 
                                </Label>
                                <Field name="income" component="input" placeholder="Income" />                      
                            </Col>
                            <Col md={3}>
                                <Label htmlFor="cycle" onClick={this.revealInput}>
                                    Pay cycle
                                </Label>
                                <Field name="cycle" component="select" placeholder="Cycle">
                                <option value="7">weekly</option>
                                    <option value="15">Bi weekly</option>
                                    <option value="30">Monthly</option>
                                </Field>                          
                            </Col>
                            <Col>
                            <Label htmlFor="date" onClick={this.revealInput}>
                                Next pay date
                            </Label>
                                <DatePicker
                                       // selected='04-01-2021'
                                        name="date"
                                        selected={ date ? new Date(date) : this.state.startDate }
                                        onChange={ this.handleChange }
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
                        </form>
                    )}/>    
                </div>
            </div>
        )
    }
}

export default withRouter(IncomeForm);