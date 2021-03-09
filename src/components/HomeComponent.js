import React, { Component } from 'react';
import Dashboard from './DashboardComponent';
import Profile from './ProfileComponent';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';




class Home extends Component {
    componentDidMount() {
        console.log(this.props.bills)
    }
    render() {
        let checkUser = this.props.bills.bills;
   
            if (checkUser) {
           return <Dashboard />
        } else return (
            <div className="container mt-5">
                <div className="row form-starter-box mx-auto mt-5">
                        <h3 className="col-8 col-md-4 my-auto offset-md-3 offset-1">Let's get you started!</h3>
                        <Link to='/profile'>
                            <i className="fa fa-3x fa-arrow-right my-auto" style={{color: "darkblue"}} />
                        </Link>
                </div>
            </div>
        )
        
        
    }
}


const mapStateToProps = state => ({bills: state.bills})
export default withRouter(connect(mapStateToProps)(Home));
