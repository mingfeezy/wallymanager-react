import React from 'react';
import SavingsForm from './SavingsForm';
import { connect } from 'react-redux';
import { updateSavings } from '../actions/ActionCreators';

const UpdateSavingsPage = (props) => (
    <div>
       <h1>Update Savings</h1>
        <SavingsForm 
            saving={props.saving}

            onSubmit={(saving)=>{
                console.log(props.saving.id);
                console.log(saving);
                props.dispatch(updateSavings(props.saving.id, saving));
                props.history.push('/dashboard');
        }}/>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        saving: state.savings.find((saving)=>saving.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(UpdateSavingsPage);