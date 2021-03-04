import * as ActionTypes from '../actions/ActionTypes';

const BillsReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_BILLS:
            return {...state, bills: action.payload}
        default:
            return state;
    }
}

export { BillsReducer as default };