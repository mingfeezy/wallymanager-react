import React from 'react';
import { Link } from 'react-router-dom';

const SavingsListItem = ({id, description, amount, frequency, enable, onClick}) => {
    return (
        <div className='container' style={{color: "black"}}>
            <div className="row song-row col-12 mx-auto my-auto p-3 mt-5" >
                <div className='col-2 p-1'>
                    <div>{description}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{amount}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{frequency}</div>
                </div>
                <div className='col-2 p-1'>
                    <div>{enable.toString()}</div>
                </div>
                <div className='col-2 p-1'>
                    <Link to={`/updateSavings/${id}`}>edit</Link>
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

export default SavingsListItem;
