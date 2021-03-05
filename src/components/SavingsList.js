import React from 'react';
import { connect } from 'react-redux';
import SavingsListItem from './SavingsListItem';
import { deleteSavings } from '../actions/ActionCreators';

const SavingsList = (props) => (
    <div>
        <div className='container my-5' style={{fontSize:"20px"}} >
            <h2>Savings</h2>
            <div className="row col-12 mx-auto" >
                <div className='col-2'>
                    <div>Description</div>
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
                    console.log(props);
                    return (<SavingsListItem 
                    key={saving.id} 
                    {...saving} 
                    onClick={(id)=> {
                            props.deleteSavings({id});
                        }
                    }
                />)
            })}
        </div>
    </div>
);

// gets current state so it can be used by component
const mapStateToProps = state =>{
    return {
        savings: state.savings
    }
}

const mapDispatchToProps =  {
    deleteSavings: ((id) => deleteSavings(id))
}

// allow componets to talk to the store
export default connect(mapStateToProps, mapDispatchToProps)(SavingsList);