import React, { Component } from 'react';
import Dashboard from './DashboardComponent';
import Profile from './ProfileComponent';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";




class Home extends Component {
    componentDidMount() {
        console.log(this.props.bills)
    }
    render() {
        let checkUser = this.props.bills.bills;
   
            if (checkUser) {
           return <Dashboard />
        } else return <Profile />
        
        
    }
}


const mapStateToProps = state => ({bills: state.bills})
export default withRouter(connect(mapStateToProps)(Home));
