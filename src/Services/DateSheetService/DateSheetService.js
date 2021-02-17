import Axios from '../../Helpers/appConfig'

const ExamDatesheet = () => {
    const body =
    {
        "search": [{
            "searchfield": "courseid", "searchvalue": "602b949c54a4b45dfc8a1629", "criteria": "eq", "datatype": "ObjectId"
        },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }],
    }
    return Axios.post('examschedules/filter', body)
}

export { ExamDatesheet } 