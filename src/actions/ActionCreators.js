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
    name= '',
    amount = 0,
    frequency = 0,
    enable = true
} = {}) => ({
    type: ActionTypes.ADD_SAVINGS,
    payload: {
        name, 
        amount,
        frequency,
        enable
    }
});

export const addBills = ({
    car= 0,
    rent= 0,
    phone= 0,
    misc =0,
    dayCar = null,
    monthCar =null,
    dayRent = null,
    monthRent = null
} = {}) => ({
    type:ActionTypes.ADD_BILLS,
    payload: {
        car,
        rent,
        phone,
        misc,
        dayCar,
        monthCar,
        dayRent,
        monthRent
    
    }
})
export const addIncome = ({
    income= 0,
    cycle= 7,
    payDay= 0,
    payMonth= 0
    
} = {}) => ({
    type:ActionTypes.ADD_INCOME,
    payload: {
        income,
        cycle,
        payDay,  
        payMonth    
    }
})

