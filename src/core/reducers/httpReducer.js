import { types } from '../actions';

const initialState = {
    pending: false,
    payload: {},
    error: null,

    pendingDay: false,
    payloadDay: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.HTTP_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.HTTP_SUCCESS:
            return {
                ...state,
                pending: false,
                payload: action.payload

            }

        case types.HTTP_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }

        case types.HTTP_PENDING_DAY:
            return {
                ...state,
                pendingDay: true
            }

        case types.HTTP_SUCCESS_DAY:
            return {
                ...state,
                pendingDay: false,
                payloadDay: action.payload
            }
        default:
            return state;
    }
}

