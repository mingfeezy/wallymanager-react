import * as ActionTypes from '../actions/ActionTypes';

const SavingsReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_SAVINGS:
            return {...state, savings: action.payload}
        default:
            return state;
    }
}

export { SavingsReducer as default };