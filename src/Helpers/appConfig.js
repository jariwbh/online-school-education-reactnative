import Axios from 'axios';
const appConfig = Axios.create({
    baseURL: 'http://live.myischool.in/api/',
    headers: {
        'Content-Type': 'application/json',
        'authkey': "5ef736f0fcca52e8f11d253a"
    }
});

export default appConfig;