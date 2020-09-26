
const types = {

    HTTP_PENDING: 'HTTP_PENDING',
    HTTP_ERROR: 'HTTP_ERROR',
    HTTP_SUCCESS: 'HTTP_SUCCESS',

    HTTP_PENDING_DAY: 'HTTP_PENDING_DAY',
    HTTP_SUCCESS_DAY: 'HTTP_SUCCESS_DAY',
   
}

const actions = {

    //HTTP
    startHTTPRequest: () => ({
        type: types.HTTP_PENDING,
    }),
    stopHTTPRequestError: (error) => ({
        type: types.HTTP_ERROR,
        error: error
    }),
    stopRequestSuccess: (payload,concat) => ({
        type: types.HTTP_SUCCESS,
        payload: payload,
       
    }) ,



    //HTTP BY DAY
    startFetchDay: () => ({
        type: types.HTTP_PENDING_DAY,
    }),
   
    stopFetchDay: (payload) => ({
        type: types.HTTP_SUCCESS_DAY,
        payload: payload,
     
    }) 
}



export { types, actions };
