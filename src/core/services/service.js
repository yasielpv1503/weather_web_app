import { toast } from "react-toastify";
 

const post = (endpoint, body) => {
    const requestOptions = {
        method: 'POST',
        headers: header(),
        body: JSON.stringify(body)
    };
    return fetch(process.env.REACT_APP_BACKEND + endpoint, requestOptions).then(handleResponse)
}

const put = (endpoint, body) => {
    const requestOptions = {
        method: 'PUT',
        headers: header(),
        body: JSON.stringify(body)
    };
    return fetch(process.env.REACT_APP_BACKEND + endpoint, requestOptions)
        .then(handleResponse)
}

const get = (endpoint) => {
    const requestOptions = {
        method: 'GET',
        headers: header(),

    };
    return fetch(process.env.REACT_APP_BACKEND + endpoint, requestOptions)
        .then(handleResponse)
}




const del = (endpoint) => {
    const requestOptions = {
        method: 'DELETE',
        headers: header()
    };
    return fetch(process.env.REACT_APP_BACKEND + endpoint, requestOptions)
        .then(handleResponse)
}


const header = () => {
    let header = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    return header;
}




const handleResponse = (response) => {
    let contentType = response.headers.get("content-type");
    if (!response.ok) {
        mapErrorToMessage(response.clone())
        throw response
    } else {
        return response.json().then(data => {
            return data;
        });
    }
}

const mapErrorToMessage = (response) => {
    let code = response.status
    switch (code) {
        case 400:
            response.text().then(data => {
                toast.error(data)
            })
            break;
        case 404:
            toast.error('Element not found')
            break;
        case 401:
            toast.error('Full authentication is required to access this resource')
            break;
        case 500:
            toast.error('Internal Error Server (This message is only for development proyect)')
            break;
        default:
        /*
            return response.json().then(data => {
                if (!data.message) {
                    toast.error(response.statusText)
                } else {
                    toast.error( data.message)
                }
            });
            */
    }
}


export default { post, put, del, get, mapErrorToMessage }