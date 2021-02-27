import Axios from 'axios';
const appConfig = Axios.create({
    baseURL: 'http://live.myischool.in/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default appConfig;