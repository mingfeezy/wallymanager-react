import React, { Component } from 'react';
import SavingsForm from './SavingsForm';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addSavings } from '../actions/ActionCreators'
import { getNextPayDate } from '../actions/ActionCreators'
import { getBalance }from '../actions/ActionCreators'
const mapStateTorops = state => ({ management: state.management, bills: state.bills, savings: state.savings, income: state.income, profile: state.profile })
const mapDispatchToProps = {
    getNextPayDate,
    getBalance,
    addSavings
}
class AddSavingsPage extends Component {
    constructor(props) {
        super(props)
        
    }
componentWillUnmount() {
    
}
handleSubmit(saving) {
    console.log(saving)
    this.props.addSavings(saving);
    this.props.getBalance(this.props.bills, this.props.income[0].income, this.props.income[0].cycle, this.props.management.payDay, +saving.amount) 
    
}
    render() {
        return (
            <div>
            <h1>Savings</h1>
             <SavingsForm 
                 onSubmit={(saving)=> this.handleSubmit(saving)} />
           
         </div>

        )
    }
}
// const AddSavingsPage = (this.props) => (

    
// );


export default withRouter(connect(mapStateTorops, mapDispatchToProps)(AddSavingsPage));