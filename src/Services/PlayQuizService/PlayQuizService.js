import Axios from '../../Helpers/appConfig'

const getAllPlayQuizService = (id) => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq",
            "datatype": "text"
        }, {
            "searchfield": "property.course",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "text"
        }], "sort": { "createdAt": -1 }
    }
    return Axios.post('exams/filter', body)
}

const getByIdPlayQuizService = (id) => {
    return Axios.get('exams/' + id)
}

const addExamResultService = (data) => {
    const body = JSON.stringify(data)
    return Axios.post('onlineexamresults', body);
}

const getExamResult = () => {
    const body = {
        "search": [{
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq",
            "datatype": "text"
        }], "sort": { "createdAt": -1 }
    }
    return Axios.post('onlineexamresults/filter', body);
}

const getOfflineExamResult = (id) => {
    const body = {
        "search": [{
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq",
            "datatype": "text"
        },
        {
            "searchfield": "courseid",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "ObjectId"
        }
        ], "sort": { "createdAt": -1 }
    }
    return Axios.post('examresults/filter', body);
}

export { getAllPlayQuizService, getByIdPlayQuizService, addExamResultService, getExamResult, getOfflineExamResult };