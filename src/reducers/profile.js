import * as ActionTypes from '../actions/ActionTypes';

const ProfileReducer = (state = {
    // isLoading: true,
    // errMess: null,
    profileData: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROFILE:
            return {...state, profileData: action.payload}
        default:
            return state;
    }
}

export { ProfileReducer as default }