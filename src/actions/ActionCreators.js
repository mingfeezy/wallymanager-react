import * as ActionTypes from './ActionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addProfile = ({
    firstName= '',
    lastName = '',
    email = '',
    userName = '',
    password = '',
} = {}) => ({
    type: ActionTypes.ADD_PROFILE,
    user: {
        id:uuidv4(),
        firstName,
        lastName,
        email,
        userName,
        password
    }
});

