import * as ActionTypes from '../actions/ActionTypes';

const IncomeReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_INCOME:
            return [...state, action.payload]
        default:
            return state;
    }
}
export { IncomeReducer as default };