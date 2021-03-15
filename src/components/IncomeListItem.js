import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

function checkCycle(cycle) {
    switch (cycle) {
        case 7:
            return 'Weekly';
        case 15:
            return 'Bi weekly'
        default:
            return 'Monthly'
    }
}
const mapStateTothisProps = (management) => ({ 
    management
 
})
const IncomeListItem = ({id, income, cycle, payDay, payMonth, date, onClick}) => {
    return (
        <div className='container' style={{color: "black"}}>
            <div className="row song-row col-12 mx-auto my-auto p-3 mt-5" >
                <div className='col-2 p-1'>
                    <div>{income}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{checkCycle(cycle)}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{payDay}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{payMonth}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{date}</div>
                </div>
                <div className='col-2 p-1'>
                    <Link to={`/updateIncome/${id}`}>edit</Link>
                </div>
                <div className='col-2 p-1'>
                    <button onClick={(e)=> {
                        onClick(id);
                    }}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(connect(mapStateTothisProps)(IncomeListItem));
