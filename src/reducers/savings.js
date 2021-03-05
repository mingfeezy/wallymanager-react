import * as ActionTypes from '../actions/ActionTypes';

const SavingsReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_SAVINGS:
            return [...state, action.payload]
        case ActionTypes.UPDATE_SAVINGS:
            return state.map((saving)=>{
                console.log(saving.id);
                console.log(action.payload);
                if(saving.id === action.payload.id) {
                    return {
                        ...saving,
                        ...action.payload.saving
                    }
                } else {
                    return saving;
                }
            });
        default:
            return state;
    }
}
export { SavingsReducer as default };