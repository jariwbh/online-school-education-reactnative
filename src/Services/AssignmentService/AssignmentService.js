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
    return Axios.post('assignments/filter', body);
}

function uploadAssignmentService(data) {
    const body = JSON.stringify(data)
    return Axios.post('formdatas', body);
}

function submitAssignmentListService(id) {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq",
            "datatype": "text"
        },
        {
            "searchfield": "formid",
            "searchvalue": "60d71c8199e17f3bf85cfd40",
            "criteria": "eq",
            "datatype": "ObjectId"
        },
        {
            "searchfield": "contextid",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "ObjectId"
        }], "formname": "assignmentsubmissionlisting"
    }
    return Axios.post('formdatas/filter', body);
}

export { assignmentListService, uploadAssignmentService, submitAssignmentListService };