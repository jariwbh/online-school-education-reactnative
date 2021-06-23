import Axios from '../../Helpers/appConfig'

const UpdateStudentService = (id, body) => {
    return Axios.put('members/' + id, body);
}

const UpdateStudentProfilePicService = (id, body) => {
    return Axios.patch('members/' + id, body);
}

const getStudentService = (id) => {
    return Axios.get(`members/${id}`);
}

const CheckUser = (body) => {
    return Axios.post('public/checkmember', body);
}


export { UpdateStudentService, getStudentService, UpdateStudentProfilePicService, CheckUser };