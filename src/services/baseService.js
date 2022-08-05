import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const REQUEST_TIMEOUT = 3600000;

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3500/api/',
    timeout: REQUEST_TIMEOUT,
    headers: {
        'x-access-token': sessionStorage?.ACCESS_TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
