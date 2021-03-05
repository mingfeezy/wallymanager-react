import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/HomeComponent';
import Bills from '../components/BillsComponent';
import Profile from '../components/ProfileComponent';
import Header from '../components/headerComponent'
import Income from '../components/IncomeComponent';
import Savings from '../components/SavingsComponent';
import Dashboard from '../components/DashboardComponent';
import Manager from '../components/ManagerComponent'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/manager' component={Manager}/>
            <Route path='/bills' component={Bills}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/income' component={Income}/>
            <Route path='/savings' component={Savings}/>
            <Redirect to='/home' />
        </Switch>
    </BrowserRouter>
);
export default AppRouter;


// <p>{this.renderNextPayDate(this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth)}</p>
// const GetItNow = (bills = [], balance, nextPay) => {
//     let instantBalance = +nextPay.amount 
//     return (
//         <span>{bills.map(bill => {
//             if (bill.day < nextPay.day) {

//                 // return   instantBalance -=  +bill.amount  
//                   console.log('balance' + instantBalance)
//                   return this.renderNextPayDate(this.props.income[0].cycle, this.props.income[0].payDay, this.props.income[0].payMonth)
              
//               } else {
                 
//                   return 'balance'
//               }
//         })}</span>
//     )
//     return instantBalance
// }