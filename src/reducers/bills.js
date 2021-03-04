import { actionTypes } from "react-redux-form";

const BillsReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_Bills:
            return {...state, bills: action.payload}
        default:
            return state;
    }
}

export { BillsReducer as default };