import service from "./service";
import { actions } from "../actions/index";

function fetchData() {
    return dispatch => {
        dispatch(actions.startHTTPRequest());
        service.get(`/forecast?q=${process.env.REACT_APP_CITY}&cnt=40&appid=${process.env.REACT_APP_TOKEN}`).then((data) => {

            dispatch(actions.stopRequestSuccess(data));
        }).catch(() => {
            dispatch(actions.stopHTTPRequestError(""));
        })
    }
}

function fetchDataByDay(date) {
    return dispatch => {
        dispatch(actions.startFetchDay());
        service.get(`/forecast?q=${process.env.REACT_APP_CITY}&cnt=40&appid=${process.env.REACT_APP_TOKEN}`).then((data) => {
            let info = []
           
            if (data.list)
                info = data.list.filter(data => data.dt_txt.indexOf(date) !== -1)

           
            dispatch(actions.stopFetchDay(info));
        }).catch(() => {
            dispatch(actions.stopHTTPRequestError(""));
        })
    }
}






export default { fetchData,fetchDataByDay };



