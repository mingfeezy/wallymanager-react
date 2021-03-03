import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/HomeComponent';
import Bills from '../components/BillsComponent';
import Profile from '../components/ProfileComponent';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/bills' component={Bills}/>
            <Route path='/profile' component={Profile}/>
            <Redirect to='/home' />
        </Switch>
    </BrowserRouter>
);
export default AppRouter;