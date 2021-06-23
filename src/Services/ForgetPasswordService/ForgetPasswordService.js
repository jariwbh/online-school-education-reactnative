import Axios from '../../Helpers/appConfig'

const ForgetPasswordService = (body) => {
    return Axios.post('public/member/resetpassword', body);
}

export default ForgetPasswordService;