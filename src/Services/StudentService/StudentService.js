import Axios from '../../Helpers/appConfig'

const UpdateStudentService = (value) => {
    console.log(`value`, value)
    let id = value._id
    const body = JSON.stringify(value);
    return Axios.put('members/updateprofilepic/' + id, body);
}

export { UpdateStudentService };