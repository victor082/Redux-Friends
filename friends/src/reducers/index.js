import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ABSOLUTE_FAILURE } from '../actions';

const intitialState = {
    friends: [],
    isLoggingIn: false,
}

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            isLoggingIn: false,
        }

        default:
            return state;
    }
}

export default reducer;