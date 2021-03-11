import React, {useState} from 'react';
import { connect } from 'react-redux';
import { deleteIncome, sortByIncomeAscending, sortByIncomeDescending, sortByDateAscending, sortByDateDescending } from '../actions/ActionCreators';
import IncomeListItem from './IncomeListItem';
import selectIncome from '../selectors/income';

const IncomeList = (props) => {
    const [incomeToggle, setIncomeToggle] = useState(true);

    const toggleIncome = (e) => {

        //if true sort descending
        if(incomeToggle) {
            props.sortByIncomeDescending();
        }
        //ascending
        else {
            props.sortByIncomeAscending();
        }

        setIncomeToggle(!incomeToggle);

    
    }

    return (
        <div>
        <div className='container my-5' style={{fontSize:"20px"}} >
            <h2>Income</h2>
            <div className="row col-12 mx-auto" >
                <div className='col-2'>
                    <div>Income <i onClick={toggleIncome} class={`fa ${
                        incomeToggle ? 'fa-chevron-down' : 'fa-chevron-up'
                    }`}></i></div>
                    
                </div>
                <div className='col-2'>
                    <div>Cycle</div>
                </div>
                <div className='col-2'>
                    <div>Pay Day</div>
                </div>
                <div className='col-2'>
                    <div>Pay Month</div>
                </div>
                <div className='col-2'>
                    <div>Date</div>
                </div>
            </div>
        </div>
        <div>
            {props.income && props.income.map((incomeItem)=>{
                    return <IncomeListItem key={incomeItem.id} {...incomeItem}
                     onClick={(id)=> {
                            props.deleteIncome({id});
                        }
                    }
                    />
                }) 
            }
        </div>
    </div>
    ); 
}

const mapStateToProps = state => {
    return {
        income: selectIncome(state.income, state.filters),
        filters: state.filters
    }
}

const mapDispatchToProps = {
    deleteIncome: (id) => deleteIncome(id),
    sortByIncomeAscending, 
    sortByIncomeDescending, 
    sortByDateAscending, 
    sortByDateDescending
}

export default connect(mapStateToProps,mapDispatchToProps)(IncomeList);
