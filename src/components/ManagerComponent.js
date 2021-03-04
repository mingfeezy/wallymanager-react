import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Table } from 'reactstrap';


function checkCycle(cycle) {
    switch (cycle) {
        case 7:
            return 'Weekly';
        case 15:
            return 'Bi weekly'
        default:
            return 'Monthly'
    }
}

const mapStateTothisProps = state => ({ bills: state.bills, savings: state.savings, income: state.income, profile: state.profile })
// class  Dashboard  extends Component  {

//     componentDidMount() {
//         let todayDate = new Date();
//         let newMonth = todayDate.getMonth();
//         let newDay  = newMonth.getDay();
//         console.log()

//     }
//     render() {

       
//     }



 class Manager extends Component {
     constructor(props) {
         super(props) 
         this.state = {

         }
         this.getNextPayDate = this.getNextPayDate.bind(this)
     }
      getNextPayDate(cycle, day, month) {
        if (+day + +cycle >= 30) {
            return `${+month.substring(1) + 1}-${+day + +cycle - 30}`
        } else if (+day + +cycle  < 30) {
            return `${+month.substring(1)}-${+day + +cycle}`
        }  
    }
    componentDidMount() {  
            }

            
    render() {
        let checkStatus = this.props.bills.bills
        if (checkStatus) {
            return (
                <div>
                    <h1>NEXT PAY</h1>
                    <p>{this.getNextPayDate(this.props.income.income.cycle, this.props.income.income.payDay, this.props.income.income.payMonth)}</p>
                </div>
            )
        } else return <h1>Welcome to Manager, please fill the forms</h1>
        
    }
}

export default withRouter(connect(mapStateTothisProps)(Manager));