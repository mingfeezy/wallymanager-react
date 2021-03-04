import { actionTypes } from "react-redux-form";
const IncomeReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_INCOME:
            return {...state, income: action.payload}
        default:
            return state;
    }
}
export { IncomeReducer as default };