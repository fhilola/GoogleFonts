import axios from "axios";
import {AxiosInstance} from "axios"

const instance: AxiosInstance  = axios.create({
    baseURL: `https://www.googleapis.com/webfonts/v1/webfonts`,
    headers: {
        'Content-Type': 'application/json',
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
    },
});
export default instance;