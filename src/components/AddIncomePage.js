import React from 'react';
import IncomeForm from './IncomeForm';
import { connect } from 'react-redux';
import { addIncome } from '../actions/ActionCreators'

const AddIncomePage = (props) => (
    <div>
       <h1>Income</h1>
        <IncomeForm 
            onSubmit={(incomeItem)=>{
                console.log(incomeItem);
                props.dispatch(addIncome(incomeItem));
                
                props.history.push('/dashboard');
        }}/>
    </div>
);

export default connect()(AddIncomePage);