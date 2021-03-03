import * as ActionTypes from '../ActionTypes';

export const addProfile = (firstName, lastName, birthday, workField ,password) => dispatch => ({
        type: ActionTypes.addProfile,
        parload: {
            firstName,
            lastName,
            birthday,
            workField,
            password
        }
})