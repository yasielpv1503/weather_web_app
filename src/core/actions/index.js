
const types = {

    HTTP_PENDING: 'HTTP_PENDING',
    HTTP_ERROR: 'HTTP_ERROR',
    HTTP_SUCCESS: 'HTTP_SUCCESS',
 
   
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
       
    }) 
}



export { types, actions };
