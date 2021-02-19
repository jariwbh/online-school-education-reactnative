import Axios from '../../Helpers/appConfig'

const ExamDatesheet = (id) => {
    console.log('id', id)
    const body =
    {
        "search": [{
            "searchfield": "courseid", "searchvalue": id, "criteria": "eq", "datatype": "ObjectId"
        },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }],
    }
    return Axios.post('examschedules/filter', body)
}

export { ExamDatesheet } 