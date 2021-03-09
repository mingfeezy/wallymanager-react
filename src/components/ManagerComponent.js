import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Table } from 'reactstrap';

// PLEASE DO NOT DELETE THIS!!

// function checkCycle(cycle) {
//     switch (cycle) {
//         case 7:
//             return 'Weekly';
//         case 15:
//             return 'Bi weekly'
//         default:
//             return 'Monthly'
//     }
// }
// renderNextPayDate(cycle, day, month) {
//     if (+day + +cycle >= 30) {
//         return `${+month.substring(1) + 1}-${+day + +cycle - 30}`
//     } else if (+day + +cycle  < 30) {
//         return `${+month.substring(1)}-${+day + +cycle}`
//     }  
// }


const mapStateTothisProps = state => ({ management: state.management, bills: state.bills, savings: state.savings, income: state.income, profile: state.profile })

    class Manager extends Component {
     constructor(props) {
         super(props) 
         this.state = {
            payMonth: null,
            payDay: 0,
            carBillDay: null,
            carBillMonth: null,
            rentBillDay: null,
            rentBillMonth: null,
            balance: 0,
            income: null
         }
         this.getBalance = this.getBalance.bind(this);
         
     }
     
      getBalance(bills , balance, payDay) {
        
            if (bills.bills.dayCar < payDay && bills.bills.dayRent < payDay) {
                let totalBill = +bills.bills.rent + +bills.bills.car
                this.setState({balance: balance - totalBill })
                } else {
                    this.setState({balance: 'more conditions will be added soon' })
                    return <h1>{balance}</h1>
                }
 
    }
    
    componentDidMouncomt() {
            this.getBalance(this.props.bills, this.props.management.income, this.props.management.payDay) 
    }
    
    render() {
        
            return (
                <div>
                    <h1>next pay {this.props.management.payDay} - {this.props.management.payMonth}</h1>
          
                    <h3>balance :{this.state.balance}</h3>
                </div>
            )

        
    }
}

export default withRouter(connect(mapStateTothisProps)(Manager));
