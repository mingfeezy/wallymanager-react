import React, {useState} from 'react';
import { connect } from 'react-redux';
import SavingsListItem from './SavingsListItem';
import { deleteSavings, sortBySavingsAmountAscending, sortBySavingsAmountDescending, 
    sortBySavingsDescriptionAscending, sortBySavingsDescriptionDescending } from '../actions/ActionCreators';
import selectSavings from '../selectors/savings';

const SavingsList = (props) => {

    const [amountToggle, setAmountToggle] = useState(true);
    const [descriptionToggle, setDescriptionToggle] = useState(true);

    const toggleAmountSort = (e) => {

        //descending
        if(amountToggle) {
            props.sortBySavingsAmountDescending();
        }
        //ascending
        else {
            props.sortBySavingsAmountAscending();
        }
        setAmountToggle(!amountToggle);
    }

    const toggleDescriptionSort = (e) => {

        //descending
        if(descriptionToggle) {
            props.sortBySavingsDescriptionDescending();
        }
        //ascending
        else {
            props.sortBySavingsDescriptionAscending();
        }
        setDescriptionToggle(!descriptionToggle);
    }


    return (
        <div>
            <div className='container my-5' style={{fontSize:"20px"}} >
                <h2>Savings</h2>
                <div className="row col-12 mx-auto" >
                    <div className='col-2'>
                        <div>Description <i onClick={toggleDescriptionSort} class={`fa ${descriptionToggle ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i></div>
                    </div>
                    <div className='col-2'>
                    <div>Amount <i onClick={toggleAmountSort} class={`fa ${amountToggle ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i></div>
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
}

// gets current state so it can be used by component
const mapStateToProps = state =>{
    return {
        savings: selectSavings(state.savings, state.filters)
    }
}

const mapDispatchToProps =  {
    deleteSavings: ((id) => deleteSavings(id)),
    sortBySavingsAmountAscending, 
    sortBySavingsAmountDescending, 
    sortBySavingsDescriptionAscending, 
    sortBySavingsDescriptionDescending 
}

// allow componets to talk to the store
export default connect(mapStateToProps, mapDispatchToProps)(SavingsList);