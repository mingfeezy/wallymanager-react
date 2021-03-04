import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Table } from 'reactstrap';


const mapStateTothisProps = state => ({ bills: state.bills, savings: state.savings, income: state.income, profile: state.profile })




 class Dashboard extends Component {
     constructor(props) {
         super(props) 
         this.state = {

         }
        
     }

    componentDidMount() {  
            }

            
    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
               
            </div>
        )
    }
}

export default withRouter(connect(mapStateTothisProps)(Dashboard));