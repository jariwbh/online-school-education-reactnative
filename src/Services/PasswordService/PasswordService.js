import Axios from '../../Helpers/appConfig'

function ChangePasswordService(data) {
    return Axios.post('public/member/resetpassword', data);
}

export { ChangePasswordService };