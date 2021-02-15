import Axios from '../../Helpers/appConfig'

function LoginService(data) {
    const body = JSON.stringify(data)
    return Axios.post('auth/memberlogin', body);
}

export default LoginService;