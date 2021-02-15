import Axios from '../../Helpers/appConfig'

function RegisterService(data) {
    const body = JSON.stringify(data)
    return Axios.post('members', body);
}

export default RegisterService;