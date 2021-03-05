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
                    this.setState({balance: 'negative' })
                    return <h1>{balance}</h1>
                }
 
    }
    renderNextPayDate(cycle, day, month) {
        if (+day + +cycle >= 30) {
            return `${+month.substring(1) + 1}-${+day + +cycle - 30}`
        } else if (+day + +cycle  < 30) {
            return `${+month.substring(1)}-${+day + +cycle}`
        }  
    }
    
    
    componentDidMount() {
        // console.log(this.state.bills)
        // console.log(this.getNextPayDate(this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth, this.props.income[0].income))
        // console.log(this.getNextBillCar(this.props.bills.bills.monthCar, this.props.bills.bills.dayCar,this.props.bills.bills.car, 30))
        // console.log(this.getNextBillRent(this.props.bills.bills.monthRent, this.props.bills.bills.dayRent,this.props.bills.bills.rent, 30))
        // console.log(this.getBalance(bills, this.props.income[0].income, this.getNextPayDate(this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth, this.props.income[0].income)))
        // this.getNextBillCar(this.props.bills.bills.monthCar, this.props.bills.bills.dayCar,this.props.bills.bills.car, 30)
        // this.getNextBillRent(this.props.bills.bills.monthRent, this.props.bills.bills.dayRent,this.props.bills.bills.rent, 30)
        // this.getNextPayDate(this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth, this.props.income[0].income)
        this.getBalance(this.props.bills, this.props.management.income, this.props.management.payDay)
    }
    // componentDidUpdate(){
    //         this.getBalance(this.props.bills.bills, this.props.income[0].income, this.state.payDay)
            
    // }
    
    render() {
   
        
        // let instantBalance = GetItNow(bills, this.props.income[0].income, this.getNextPayDate(this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth, this.props.income[0].income));
        let checkStatus = this.props.bills.bills
        let checkS = this.props.income[0]
        if (checkStatus || checkS) {
            return (
                <div>
                    <h1>next pay {this.props.management.payDay} - {this.props.management.payMonth}</h1>
          
                    <h3>{this.state.balance}</h3>
                </div>
            )
        } else return <h1>Welcome to Manager, please fill the forms</h1>
        
    }
}

export default withRouter(connect(mapStateTothisProps)(Manager));

    // getNextBillCar(month, day,amount, cycle = 30) {
    //      bills.push({month,day,amount,cycle});
    //      console.log({month,day,amount,cycle})
    //     //  this.setState( [...bills, {month,day,amount,cycle}])
    //      this.setState( {bills: bills.push({month,day,amount,cycle})})

    // }
    // getNextBillRent(month, day,amount, cycle = 30) {
    //      bills.push({month,day,amount,cycle});
    //      console.log({month,day,amount,cycle})
    //      this.setState( {bills: bills.push({month,day,amount,cycle})})
    // }
    // getNextPayDate(cycle, day, month, amount) {
    //     let payDate = {}
    //     if (+day + +cycle >= 30) {
 
    //     //  payDate  =  {month:+month.substring(1) + 1, day:+day + +cycle - 30, amount} 
    //     //  return payDate;
    //     // console.log(+day + +cycle - 30)
    //      this.setState({payMonth:+month.substring(1) + 1, payDay:+day + +cycle - 30, income: amount })
    //     // this.setState({payDay: 5})
    //     // console.log(this.state.balance)
         
    //     } else   {
    //         // payDate = {cycle, month: +month.substring(1),day: +day + +cycle, amount}
    //         // return payDate
    //         // console.log(+day + +cycle)
    //         this.setState({payMonth:+month.substring(1), payDay:+day + +cycle,income: amount }) 
    //         // this.setState({payDay: 2})
            
    //         // console.log(this.state.balance)
    //     }  
    // }

    // Balance: {this.getBalance(this.props.bills, this.props.management.income, this.props.management.payDay)}

        // for (let i =0; i < bills.length; i++) {

        //     if (bills[i].dayCar < payDay && bills[i].dayRent < payDay) {
        //         console.log(balance - +bills[i].rent)
        //         this.setState({balance: 'positive' })
        //     return <h1>{balance}</h1>
        //     //   return   instantBalance -=  +bills[i].amount  
        //         // console.log('balance' + balance)
             
        //     } else {
                
        //         this.setState({balance: 'negative' })
        //         return <h1>{balance}</h1>
        //     }
         
           
        // }