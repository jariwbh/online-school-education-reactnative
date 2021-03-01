import Axios from '../../Helpers/appConfig'

const getAllPlayQuizService = (id) => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "publish",
            "criteria": "eq",
            "datatype": "text"
        }, {
            "searchfield": "course",
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
    return Axios.post('examresults', body)
}

export { getAllPlayQuizService, getByIdPlayQuizService, addExamResultService };