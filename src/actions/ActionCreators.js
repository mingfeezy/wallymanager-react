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
    description= '',
    amount = 0,
    frequency = 0,
    enable = true
} = {}) => ({
    type: ActionTypes.ADD_SAVINGS,
    payload: {
        id:uuidv4(),
        description, 
        amount,
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
    
    if (+payDay + +cycle >= 30) {
        return (
            {
                type: ActionTypes.ADD_NEXT_PAY_DATE,
                payload: {
                    payMonth:+payMonth,
                    payDay:+payDay + +cycle,
                    income: +income,
                    cycle: cycle
                }
            }
        )
    } else return (
        {
            type: ActionTypes.ADD_NEXT_PAY_DATE,
            payload: {
                payMonth:+payMonth + 1,
                payDay:+payDay + +cycle,
                income: +income,
                cycle: +cycle
            }
        }
    )
}
function checkCycle(cycle) {

    switch (+cycle) {
        case 7:
            return 'Weekly';
        case 15:
            return 'Bi weekly'
        default:
            return 'Monthly'
    }
}
export function getBalance(bills, income, cycle, payDay, savings) {
    console.log(savings)
    console.log(income)
    console.log(payDay)
    console.log(bills.bills.rent)
    console.log(bills.bills.car)
    console.log(bills.bills.wireless)
    console.log(bills.bills.insurances)
    let totalBill = parseFloat(bills.bills.rent) + parseFloat(bills.bills.car) + parseFloat(bills.bills.insurances) + parseFloat(bills.bills.wireless);
    let totalDeduction = parseFloat(totalBill) + parseFloat(savings)
    if (bills.bills.dayCar < payDay && bills.bills.dayRent < payDay && bills.bills.dayWireless < payDay && savings) {
        
        console.log(parseFloat(totalBill))
        console.log(parseFloat(income) - parseFloat(totalBill))
        return ({
            type: ActionTypes.GET_BALANCE,
            payload: {balance: income - totalDeduction, cycle: checkCycle(cycle), totalBill: totalBill, totalDeduction: totalDeduction}
        })
        } else {
            return ({
                type: ActionTypes.GET_BALANCE,
            payload: {balance: income, cycle: checkCycle(cycle)}
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

