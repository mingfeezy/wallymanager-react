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
    phone= 0,
    misc =0,
    dayCar = null,
    monthCar =null,
    dayRent = null,
    monthRent = null
} = {}) => ({
    type:ActionTypes.ADD_BILLS,
    payload: {
        id:uuidv4(),
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

