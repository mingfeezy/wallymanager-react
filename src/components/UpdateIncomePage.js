import React from 'react';
import IncomeForm from './IncomeForm';
import { connect } from 'react-redux';
import { updateIncome } from '../actions/ActionCreators';

const UpdateIncomePage = (props) => (
    <div>
       <h1>Update Income</h1>
        <IncomeForm 
            incomeItem={props.incomeItem}
            onSubmit={(incomeItem)=>{
                props.dispatch(updateIncome(props.incomeItem.id, incomeItem));
                props.history.push('/dashboard');
        }}/>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        incomeItem: state.income.find((incomeItem)=>incomeItem.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(UpdateIncomePage);