import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/HomeComponent';
import Bills from '../components/BillsComponent';
import Profile from '../components/ProfileComponent';
import Header from '../components/headerComponent'
import AddIncomePage from '../components/AddIncomePage';
import UpdateIncomePage from '../components/UpdateIncomePage';
import AddSavingsPage from '../components/AddSavingsPage';
import UpdateSavingsPage from '../components/UpdateSavingsPage';
import Dashboard from '../components/DashboardComponent';
import Manager from '../components/ManagerComponent'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/manager' component={Manager}/>
            <Route path='/bills' component={Bills}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/addIncome' component={AddIncomePage}/>
            <Route path='/updateIncome/:id' component={UpdateIncomePage}/>
            <Route path='/addSavings' component={AddSavingsPage}/>  
            <Route path='/updateSavings/:id' component={UpdateSavingsPage}/>  
            <Redirect to='/' />
        </Switch>
    </BrowserRouter>
);
export default AppRouter;