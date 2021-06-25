import Axios from '../../Helpers/appConfig'

const assignmentListService = () => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "publish",
            "criteria": "eq",
            "datatype": "text"
        }]
    }
    return Axios.post('membertasks/filter', body)
}

function uploadAssignmentService(data) {
    const body = JSON.stringify(data)
    return Axios.post('dispositiondatas', body);
}

function submitAssignmentListService(id) {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "done",
            "criteria": "eq",
            "datatype": "text"
        }, {
            "searchfield": "userid",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "ObjectId"
        }]
    }
    return Axios.post('dispositiondatas/filter', body)
}

export { assignmentListService, uploadAssignmentService, submitAssignmentListService };