import React from 'react';

const IncomeListItem = ({income, cycle, payDay, payMonth}) => {
    return (
        <div className='container' style={{color: "black"}}>
            <div className="row song-row col-12 mx-auto my-auto p-3 mt-5" >
                <div className='col-2 p-1'>
                    <div>{income}</div>
                </div>
              
                <div className='col-2 p-1'>
                    <div>{cycle}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{payDay}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{payMonth}</div>
                </div>
            </div>
        </div>
    );
}

export default IncomeListItem;