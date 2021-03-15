import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Table } from 'reactstrap';
import { getNextPayDate } from '../actions/ActionCreators'
import { getBalance }from '../actions/ActionCreators'

// PLEASE DO NOT DELETE THIS!!

function checkCycle(cycle) {
    console.log(cycle)
    switch (+cycle) {
        case 7:
            return 'Weekly';
        case 15:
            return 'Bi weekly'
        default:
            return 'Monthly'
    }
}
// renderNextPayDate(cycle, day, month) {
//     if (+day + +cycle >= 30) {
//         return `${+month.substring(1) + 1}-${+day + +cycle - 30}`
//     } else if (+day + +cycle  < 30) {
//         return `${+month.substring(1)}-${+day + +cycle}`
//     }  
// }


const mapStateTothisProps = ({management, bills, savings, income, profile}) => ({ 
    management, 
    bills, 
    savings, 
    income, 
    profile
})

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
        //  this.getBalance = this.getBalance.bind(this);
         
     }
     
    //   getBalance(bills , balance, payDay, insurances) {
        
    //         if (bills.dayCar < payDay && bills.bills.dayRent < payDay && bills.dayWireless < payDay) {
    //             let totalBill = +bills.bills.rent + +bills.bills.car
    //             this.setState({balance: balance - totalBill })
    //             } else {
    //                 this.setState({balance: 'more conditions will be added soon' })
    //                 return <h1>{balance}</h1>
    //             }
 
    // }
    
    // componentDidMount() {
    //     getBalance(this.props.bills.bills, this.props.income[0].income, this.props.income[0].cycle, this.props.management.payDay. this.props.savings[0].amount)
    //     getNextPayDate(this.props.income[0].income, this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth)
            // console.log(this.props.profile)
            // console.log(this.props.bills)
            // console.log(this.props.income)
            // console.log(this.props.savings)
            
            // this.getBalance(this.props.bills, this.props.management.income, this.props.management.payDay) 
    // }
    // <h1>next pay {this.props.management.payDay ? this.props.management.payDay: <div />} - {this.props.management.payMonth}</h1>
    // balance :{this.state.balance}
    //  line 93 <p className="offset-4" style={{fontSize: "15px", color: "darkblue", marginTop: "-25px", fontWeight: "bold"}}>{checkCycle(this.props.income[0].cycle)}</p>
    // line 91    <p style={{fontSize: "44px", color: "darkblue"}}>{this.props.income[0].income}$</p>
    render() {
        
            return (
                <div className="container mt-5">
                    <div className="row mb-5">
                        <button className="editBtn col-2 text-white"><i class="fa fa-edit my-auto" /> Profile</button>
                        <button className="editBtn col-2 text-white" ><i class="fa fa-edit my-auto" />  Income</button>
                        <button className="editBtn col-2 text-white"><i class="fa fa-edit my-auto" />  Bills</button>
                        <button className="editBtn col-2 text-white"><i class="fa fa-edit my-auto" />  Savings</button>
                    </div>
                    
                    <div className="row mt-3">
                        <h3 className="col-4 offset-4" style={{fontSize: "85px", color: "yellowgreen"}}>{this.props.management.balance.balance}$</h3>
                    </div>
                    <div className="row" style={{marginTop: "-10px"}}>
                        <p className="col-2 offset-5" style={{fontSize: "12px", color: "red"}}>Next balance: {this.props.management.payMonth}-{this.props.management.payDay}</p>
                        
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 custom-amount-box mx-auto" align="center">
                            <h4>Income</h4>
                            <p style={{fontSize: "44px", color: "fuchsia"}}>{this.props.income[0].income}$</p>
                            <p className="offset-4" style={{fontSize: "15px", color: "tan", marginTop: "-25px", fontWeight: "bold"}}>{checkCycle(this.props.income[0].cycle)}</p>
                            <p className="offset-4" style={{fontSize: "15px", color: "tan", marginTop: "-20px"}}>Before {this.props.management.payMonth}-{this.props.management.payDay}</p>
                        </div>
                        <div className="col-3 custom-amount-box  mx-auto" align="center">
                            <h4>Bills</h4>
                            <p style={{fontSize: "44px", color: "darkorange"}}>{this.props.management.balance.totalBill}$</p>
                        </div>
                        <div className="col-3 custom-amount-box  mx-auto" align="center">
                            <h4>Savings</h4>
                            <p style={{fontSize: "44px", color: "yellowgreen"}}>{+this.props.savings[0].amount ? +this.props.savings[0].amount: 0 }$</p>
                        </div>
                    </div>

                </div>
            )

        
    }
}

export default withRouter(connect(mapStateTothisProps)(Manager));
