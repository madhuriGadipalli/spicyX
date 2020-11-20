import axios from 'axios';
export const FIREREQUEST = "FIREREQUEST";
export const RESPONSE_SUCESS = "RESPONSE_SUCESS";
export const RESPONSE_ERROR = "RESPONSE_ERROR";
export const CONTACTUSREQUEST = "CONTACTUSREQUEST";
export const SUBMITFORMSUCCESS = "SUBMITFORMSUCCESS";
export const SUBMITFORMFAILURE = "SUBMITFORMFAILURE";


export const fireRequestOnLoad = (data) => {
    const url = "/api/" + data
    return function (dispatch) {
        dispatch({ type: FIREREQUEST });
        axios.get(
            url
        ).then(response => dispatch({
            type: RESPONSE_SUCESS,
            response: response,
            tab: data
        })).catch(error => dispatch({
            type: RESPONSE_ERROR,
            data: error
        }))
    }
}

export const submitContactForm = (data) => {
    const url = "/api/contactUS"
    return function (dispatch) {
        dispatch({ type: CONTACTUSREQUEST });
        axios.get('/api/contactUS', {
            params: {
                data
            }
        }).then(response => dispatch({
            type: SUBMITFORMSUCCESS,
            response: response,
            tab: data
        })).catch(error => dispatch({
            type: SUBMITFORMFAILURE,
            data: error
        }))
    }
}