import Axios from 'axios';
const appConfig = Axios.create({
    baseURL: 'http://app.myischool.in/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default appConfig;