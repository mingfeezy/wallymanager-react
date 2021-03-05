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
        id:uuidv4(),
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
    payMonth= 0
    
} = {}) => ({
    type:ActionTypes.ADD_INCOME,
    payload: {
        id:uuidv4(),
        income,
        cycle,
        payDay,  
        payMonth    
    }
})
export function getNextPayDate ({income, cycle, payDay, payMonth}
)  {
    console.log(income,cycle,payDay, payMonth)

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
                payMonth:+payMonth,
                payDay:+payDay + +cycle,
                income: +income,
                cycle: +cycle
            }
        }
    )
                   

}
    

// export const getNextPayDate = (income, cycle, payDay, payMonth) => {

//     // if (+payDay + +cycle >= 30) {
//     let nextDay = +payDay + 50;
//     //  this.setState({payMonth: +month.substring(1) + 1, payDay:+day + +cycle - 30, income: amount })
//         return {
//             type: ActionTypes.ADD_NEXT_PAY_DATE,
//             payload: {
//                 payMonth:payMonth,
//                 payDay:5,
//                 // income: income ,
               
//             }
//         }
     
//     // } else   {
   
//     //     return {
//     //         type: ActionTypes.ADD_NEXT_PAY_DATE,
//     //         payload: {
//     //             payMonth:+payMonth,
//     //             payDay:+payDay + +cycle,
//     //             income: +income 
//     //         }
//     //     }
        
//     // }  
// }

// export const getNextPayDate = ({
//     income= 0,
//     cycle= 7,
//     payDay= 0,
//     payMonth= 0
// }) =>  {
//     return dispatch => {

//         ({
//             type: ActionTypes.ADD_NEXT_PAY_DATE,
//                     payload: {
//                         payMonth:+payMonth + 55,
//                         payDay:5,
//                         // income: income ,
                       
//                     }
//         })
//     }
// }
    