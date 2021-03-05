import * as ActionTypes from '../actions/ActionTypes';

const ManagementReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_NEXT_PAY_DATE:
            return action.payload
        default:
            return state;
    }
}
export { ManagementReducer as default };