import * as ActionTypes from '../actions/ActionTypes';

const SavingsReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_SAVINGS:
            return [...state, action.payload]
        default:
            return state;
    }
}
export { SavingsReducer as default };