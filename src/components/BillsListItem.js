import React from 'react';

const SavingsListItem = ({name, amount, frequency, enable}) => {
    return (
        <div className='container' style={{color: "black"}}>
            <div className="row song-row col-12 mx-auto my-auto p-3 mt-5" >
                <div className='col-2 p-1'>
                    <div>{name}</div>
                </div>
              
                <div className='col-2 p-1'>
                    <div>{amount}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{frequency}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{enable}</div>
                </div>
            </div>
        </div>
    );
}
export default SavingsListItem;
