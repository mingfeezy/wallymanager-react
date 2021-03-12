import React from 'react';
import IncomeList from './IncomeList';
import SavingsList from './SavingsList';
import IncomeListFilters from './IncomeListFilters';


const Dashboard = (props) => {

    return (
        <>
         <IncomeListFilters/>
        <IncomeList/>
        <SavingsList/>
        </>
    )
    
}

export default Dashboard;