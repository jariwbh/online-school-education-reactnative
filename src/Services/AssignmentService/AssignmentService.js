import Axios from '../../Helpers/appConfig'

const assignmentListService = (data) => {
    const body =
    {
        "search": [
            { "searchfield": "assingeestudents", "searchvalue": data.assingeestudents, "criteria": "eq", "datatype": "ObjectId" },
            { "searchfield": "status", "searchvalue": "publish", "criteria": "eq", "datatype": "text" },
            { "searchfield": "property.duedate", "searchvalue": data.duedate, "criteria": "gte", "datatype": "Date" }
        ],
        "formname": "assignment"
    }
    return Axios.post('assignments/filter', body)
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