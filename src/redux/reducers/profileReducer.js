import * as ActionTypes from '../ActionTypes';

export const Profile = (state = {
    // isLoading: true,
    // errMess: null,
    profileData: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROFILE:
            return {...state, profileData: action.payload}
    }
}