import React from 'react';
import { connect } from 'react-redux';
import SavingsListItem from './SavingsListItem';

const SavingsList = (props) => (
    <div>
        <div className='container my-5' style={{fontSize:"20px"}} >
            <h2>Savings</h2>
            <div className="row col-12 mx-auto" >
                <div className='col-2'>
                    <div>Name </div>
                </div>
                <div className='col-2'>
                    <div>Amount</div>
                </div>
                <div className='col-2'>
                    <div>Frequency</div>
                </div>
                <div className='col-2'>
                    <div>Enable</div>
                </div>
            </div>
        </div>
        <div>
            {props.savings && props.savings.map((saving)=>{
                    return <SavingsListItem key={saving.id} {...saving}/>
                }) 
            }
        </div>
    </div>
);

// gets current state so it can be used by component
const mapStateToProps = state =>{
    console.log(state.savings);
    return {
        savings: state.savings
    }
}

// allow componets to talk to the store
export default connect(mapStateToProps)(SavingsList);