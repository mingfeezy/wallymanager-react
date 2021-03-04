import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Table } from 'reactstrap';
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
// function getNextPayDate(cycle, date) {
//     let payDayEstimation = cycle + date;
//     switch (payDayEstimation) {
//         case
//     }
// }
function Dashboard (props)  {
    if (props.bills.bills) {
        let cycle = props.income.income.cycle

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h5>Bills</h5>
                        <Table bordered>
                            <tbody>
                            <tr>           
                                <th>Car</th>
                                <td>{props.bills.bills.car}</td>                    
                            </tr>
                            <tr>                     
                                <th>Rent</th>
                                <td>{props.bills.bills.rent}</td>                     
                            </tr>
                            <tr>                       
                                <th>Phone</th>
                                <td>{props.bills.bills.phone}</td>                        
                            </tr>
                            <tr>  
                                <th>Misc</th>
                                <td>{props.bills.bills.misc}</td>    
                            </tr>
                            </tbody>    
                        </Table>
                    </div>
                    <div className="col-6">
                        <h5>Income</h5>
                        <Table >
                            <tbody>
                            <tr>           
                                <th>Pay</th>
                                <td>{props.income.income.income}</td>                    
                            </tr>
                            <tr>                     
                                <th>Cycle</th>
                                <td>{checkCycle(props.income.income.cycle)}</td>                    
                            </tr>
                            <tr>                       
                                <th>Phone</th>
                                <td>{props.income.income.payDay}</td>                        
                            </tr>
                         
                            </tbody>    
                        </Table>
                    </div>
                </div>
          
            </div>
        )
    } else return (<div>Please fill up the form!</div>)
    
        
    
}

const mapStateToProps = state => ({ bills: state.bills, savings: state.savings, income: state.income, profile: state.profile })

export default withRouter(connect(mapStateToProps)(Dashboard));