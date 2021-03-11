import React from 'react';
import { connect } from 'react-redux';
import { deleteIncome } from '../actions/ActionCreators';
import IncomeListItem from './IncomeListItem';
import selectIncome from '../selectors/income';

const IncomeList = (props) => {
    return (
        <div>
        <div className='container my-5' style={{fontSize:"20px"}} >
            <h2>Income</h2>
            <div className="row col-12 mx-auto" >
                <div className='col-2'>
                    <div>Income</div>
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
    deleteIncome: (id) => deleteIncome(id)
}

export default connect(mapStateToProps,mapDispatchToProps)(IncomeList);
