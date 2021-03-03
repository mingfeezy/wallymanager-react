import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/HomeComponent';
import BillsForm from '../components/BillsFormComponent';
import IncomeForm from '../components/IncomeFormComponent'
import Header from '../components/headerComponent';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/billsForm' component={BillsForm}/>
                <Route path='/incomeForm' component={IncomeForm}/>
                <Redirect to='/home' />
            </Switch>
    </BrowserRouter>
);
export default AppRouter;