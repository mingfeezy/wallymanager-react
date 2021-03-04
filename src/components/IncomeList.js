import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';

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
            </div>
        </div>
        <div>
            {props.income && props.income.map((incomeItem)=>{
                    return <IncomeListItem key={incomeItem.id} {...incomeItem}/>
                }) 
            }
        </div>
    </div>
    ); 




}

const mapStateToProps = (state) => {
    return {
        income: state.income
    }
}

export default connect(mapStateToProps)(IncomeList);
