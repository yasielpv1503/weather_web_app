import { types } from '../actions';

const initialState = {
    pending: false,
    payload: {},
    error: null,
 
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

        
        default:
            return state;
    }
}

