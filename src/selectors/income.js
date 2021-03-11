//import React from 'react';
//import moment from 'moment';


export default (income, {sortBy}) => {
    return income.sort((a,b)=>{
        if(sortBy === 'amount-descending') {
            return b.income - a.income;
        }
        else if(sortBy === 'amount-ascending') {
           return a.income - b.income;
        }
        else if(sortBy === 'date-ascending') {
            return a.income - b.income;
         }
        else if(sortBy === 'date-descending') {
            return b.date - a.date;
         }
    });
}