import * as ActionTypes from './ActionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addProfile = ({
    firstName= '',
    lastName = '',
    email = '',
    userName = '',
    password = '',
} = {}) => ({
    type: ActionTypes.ADD_PROFILE,
    payload: {
        id:uuidv4(),
        firstName,
        lastName,
        email,
        userName,
        password
    }
});

export const addSavings = ({
    amount = 0,
    description= '',
    frequency = 0,
    enable = true
} = {}) => ({
    type: ActionTypes.ADD_SAVINGS,
    payload: {
        id:uuidv4(),
        amount,
        description, 
        frequency,
        enable
    }
});

export const updateSavings = (id, saving) => ({
    type: ActionTypes.UPDATE_SAVINGS,
    payload: {
      id,
      saving
    }
});

export const deleteSavings = ({id} = {}) => ({
    type: ActionTypes.DELETE_SAVINGS,
    id
});

export const addBills = ({
    car= 0,
    rent= 0,
    insurances = 0,
    wireless,
    dayCar = null,
    monthCar =null,
    dayRent = null,
    monthRent = null,
    monthWireless = null,
    dayWireless = null,
    monthInsurances = 1,
    dayInsurances = 3
} = {}) => ({
    type:ActionTypes.ADD_BILLS,
    payload: {
        id:uuidv4(),
        car,
        rent,
        insurances,
        wireless,
        dayCar,
        monthCar,
        dayRent,
        monthRent,
        monthWireless,
        dayWireless,
        monthInsurances,
        dayInsurances
    
    }
})
export const addIncome = ({
    income= 0,
    cycle= 7,
    payDay= 0,
    payMonth= 0,
    date=''
    
} = {}) => ({
    type:ActionTypes.ADD_INCOME,
    payload: {
        id:uuidv4(),
        income,
        cycle,
        payDay,  
        payMonth,
        date    
    }
})
export function getNextPayDate (income, cycle, payDay, payMonth) {
    
    if (payDay + cycle >= 30) {
        return (
            {
                type: ActionTypes.ADD_NEXT_PAY_DATE,
                payload: {
                    payMonth:payMonth,
                    payDay:payDay + cycle,
                    income: income,
                    cycle: cycle
                }
            }
        )
    } else return (
        {
            type: ActionTypes.ADD_NEXT_PAY_DATE,
            payload: {
                payMonth:payMonth + 1,
                payDay:payDay + cycle,
                income: income,
                cycle: cycle
            }
        }
    )
}
function checkCycle(cycle) {

    switch (cycle) {
        case 7:
            return 'Weekly';
        case 15:
            return 'Bi weekly'
        default:
            return 'Monthly'
    }
}
function checkBillsCycle(incomecycle, carCycle, rentCycle, wirelesscycle, car, rent, wireless) {
    console.log(incomecycle)
    let bills = {amountCar: car, amountRent: rent, amountWireless: wireless}
    switch (incomecycle) {
        case incomecycle < carCycle:
            
            bills.amountCar = 0
            return bills
        case incomecycle < rentCycle:
            return bills = {...bills, amountRent: 0};
        case incomecycle < wirelesscycle:
            return bills = {...bills, amountWireless: 0}
        default:
            return bills
    }
    
}
export function getBalance(bills, income, cycle, payDay, savings) {
    let totalBill = bills.bills.rent + bills.bills.car + bills.bills.insurances + bills.bills.wireless;
    let totalDeduction = totalBill + savings
    if (bills.bills.dayCar < payDay && bills.bills.dayRent < payDay && bills.bills.dayWireless < payDay && savings) {
        return ({
            type: ActionTypes.GET_BALANCE,
            payload: {balance: income - totalDeduction, cycle: checkCycle(cycle), totalBill: totalBill, totalDeduction: totalDeduction}
        })
        } else if (!savings) {
            return ({
                type: ActionTypes.GET_BALANCE,
                payload: {balance: income - totalBill, cycle: checkCycle(cycle), totalBill: totalBill, totalDeduction: totalDeduction}
            })
        } else if (!bills && savings) {
            return ({
                type: ActionTypes.GET_BALANCE,
                payload: {balance: income - savings, cycle: checkCycle(cycle), totalBill: 0, totalDeduction: savings}
            })
        } else if (!bills && !savings) {
            return ({
                type: ActionTypes.GET_BALANCE,
                payload: {balance: income , cycle: checkCycle(cycle), totalBill: 0, totalDeduction: 0}
            })
        }
}

export const updateIncome = (id, incomeItem) => ({
    type: ActionTypes.UPDATE_INCOME,
    payload: {
      id,
      incomeItem
    }
});

export const deleteIncome = ({id}) => ({
    type: ActionTypes.DELETE_INCOME,
    id
});

export const sortByIncomeAscending = () => ({
    type: 'SORT_BY_INCOME_ASCENDING'
});

export const sortByIncomeDescending = () => ({
    type: 'SORT_BY_INCOME_DESCENDING'
});

export const sortByDateAscending = () => ({
    type: 'SORT_BY_DATE_ASCENDING'
});

export const sortByDateDescending = () => ({
    type: 'SORT_BY_DATE_DESCENDING'
});

export const sortBySavingsAmountAscending = () => ({
    type: 'SORT_BY_SAVINGS_AMOUNT_ASCENDING'
});

export const sortBySavingsAmountDescending = () => ({
    type: 'SORT_BY_SAVINGS_AMOUNT_DESCENDING'
});

export const sortBySavingsDescriptionAscending = () => ({
    type: 'SORT_BY_SAVINGS_DESCRIPTION_ASCENDING'
});

export const sortBySavingsDescriptionDescending = () => ({
    type: 'SORT_BY_SAVINGS_DESCRIPTION_DESCENDING'
});



