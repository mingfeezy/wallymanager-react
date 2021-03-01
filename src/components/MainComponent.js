import React, { Component } from 'react';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <switch>
                <Route path='/home' component={Home}/>
                <Redirect to='/home' />
            </switch>
        )
    }
}

export default Main;