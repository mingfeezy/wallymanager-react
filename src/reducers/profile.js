import * as ActionTypes from '../actions/ActionTypes';

const ProfileReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROFILE:
            return {...state, profile: action.payload}
        default:
            return state;
    }
}

export { ProfileReducer as default }