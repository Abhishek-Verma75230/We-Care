import axios from 'axios';
// import { getAccessToken,getType } from '../utils/commom-utils';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/Config';
const API_URL = 'http://localhost:8000';




const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
        // "Accept":"application/json,form-data",
        // "Content-Type":"application/json"
    }

})


axiosInstance.interceptors.request.use(
    function (Config) {
        // if(Config.TYPE.params)
        // {
        //     Config.params=Config.TYPE.params;
        // }
        // else
        // {
        //     if(Config.TYPE.query)
        //     {
        //         Config.url = Config.url + '/' + Config.TYPE.query;
        //     }
        // }
        return Config;
    },

    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response);
    },

    function (error) {
        return Promise.reject(processError(error));
    }
)




const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    }
    else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}


const processError = async (error) => {
    if (error.response) {

        if (error.response?.status === 403) {

            sessionStorage.clear();

        } else {
            console.log("ERROR IN RESPONSE: ", error);
            return {
                isError: true,
                msg: API_NOTIFICATION_MESSAGES.responseFailure,
                code: error.response.status
            }
        }
    } else if (error.request) {

        console.log("ERROR IN RESPONSE: ", error);
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    } else {
        console.log("ERROR IN RESPONSE: ", error);
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}

const API={};



for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '' : body,
            responseType: value.responseType,
            // headers: {
            //     // authorization: getAccessToken()
            // },
            //  TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        })
}




export {API};