import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/HomeComponent'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home}/>
            <Redirect to='/home' />
        </Switch>
    </BrowserRouter>
);
export default AppRouter;