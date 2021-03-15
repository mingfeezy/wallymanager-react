import React from 'react';
import IncomeForm from './IncomeForm';
import { connect } from 'react-redux';
import { updateIncome } from '../actions/ActionCreators';
import { getNextPayDate } from '../actions/ActionCreators'
import { getBalance }from '../actions/ActionCreators'

const UpdateIncomePage = (props) => (
    <div>
       <h1>Update Income</h1>
        <IncomeForm 
            incomeItem={props.incomeItem}
            onSubmit={(incomeItem)=>{
                console.log(incomeItem)
                props.dispatch(updateIncome(props.incomeItem.id, incomeItem));
                props.dispatch(getBalance(props.bills, incomeItem.income, props.income[0].cycle, props.management.payDay, props.savings[0].amount))
                props.history.push('/dashboard');
        }}/>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        incomeItem: state.income.find((incomeItem)=>incomeItem.id === props.match.params.id),
        bills: state.bills, savings: state.savings, income: state.income, management: state.management
    }
}

export default connect(mapStateToProps)(UpdateIncomePage);