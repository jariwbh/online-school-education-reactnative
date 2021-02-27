import Axios from '../../Helpers/appConfig'

function ChangePasswordService(data) {
    const body = JSON.stringify(data)
    return Axios.post('auth/member/resetpassword', body);
}

export { ChangePasswordService };