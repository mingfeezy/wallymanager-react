import * as ActionTypes from '../actions/ActionTypes';

const IncomeReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_INCOME:
            return [...state, action.payload];
        case ActionTypes.UPDATE_INCOME:
            return state.map((incomeItem)=>{
                console.log(incomeItem.id);
                console.log(action.payload);
                if(incomeItem.id === action.payload.id) {
                    return {
                        ...incomeItem,
                        ...action.payload.incomeItem
                    }
                } else {
                    return incomeItem;
                }
            });
        case ActionTypes.DELETE_INCOME:
            return state.filter(({id})=>{
                return id !== action.id
            });
        default:
            return state;
    }
}
export { IncomeReducer as default };