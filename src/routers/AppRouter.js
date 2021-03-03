import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/HomeComponent';
import Bills from '../components/BillsComponent';
import Profile from '../components/ProfileComponent';
import Header from '../components/headerComponent';
import Income from '../components/IncomeComponent'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/bills' component={Bills}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/income' component={Income}/>
            <Redirect to='/home' />
        </Switch>
    </BrowserRouter>
);
export default AppRouter;