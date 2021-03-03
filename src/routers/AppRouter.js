import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/HomeComponent';
import BillsForm from '../components/BillsFormComponent';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/billsForm' component={BillsForm}/>
            <Redirect to='/home' />
        </Switch>
    </BrowserRouter>
);
export default AppRouter;