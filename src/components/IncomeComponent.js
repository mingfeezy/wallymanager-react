import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Label,Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
const isNumber = val => !isNaN(+val);
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
        console.log(values)
        console.log(this.state.startDate)
    }
    handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    
    render() {
        return (
            <div className="container">
                    <LocalForm name="incomeForm" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Col md={3}>
                            <Label htmlFor="payInput" onClick={this.revealInput}>
                                Net income 
                            </Label>
                            <Control.text
                                id="payInput" 
                                name="payInput"
                                model=".payInput"
                                className="form-control"
                                placeholder="0.00$" 
                                validators={{
                                    isNumber
                                }}     
                                />
                                <Errors
                                    className="text-danger"
                                    model=".payInput"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        isNumber: 'Must be a number'      
                                    }}
                                />
                                                    
                        </Col>
                        <Col md={3}>
                            <Label htmlFor="payCycleInput" onClick={this.revealInput}>

                                pay cycle
                            </Label>
                            <Control.select 
                                id="payCycleInput"
                                name="payCycleInput"
                                model=".payCycleInput"
                                className="form-control">
                                <option value="weekly">weekly</option>
                                <option value="biWeekly" selected>Bi weekly</option>
                                <option value="monthly">Monthly</option>

                            </Control.select>                          
                        </Col>
                        <Col>
                        <Label htmlFor="nextPayDate" onClick={this.revealInput}>

                        Next pay date
                        </Label>
                        
                            <DatePicker
                                    model=".nextPayDate"
                                    name="nextPayDate"
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
                                    <Button className="text-white" type="submit"  style={{background: " #1CB5E0",border: "none",color: "white !important "}} color="primary" disabled={false}>
                                        Submit
                                    </Button>
                                </Col>  
                    </Row>
                </LocalForm>
            </div>
        )
    }
}

export default Income;