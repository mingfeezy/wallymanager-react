import React from 'react';
import SavingsForm from './SavingsForm';
import { connect } from 'react-redux';
import { addSavings } from '../actions/ActionCreators'

const AddSavingsPage = (props) => (
    <div>
       <h1>Savings</h1>
        <SavingsForm 
            onSubmit={(saving)=>{
                props.dispatch(addSavings(saving));
                props.history.push('/dashboard');
        }}/>
    </div>
);

export default connect()(AddSavingsPage);