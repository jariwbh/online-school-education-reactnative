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

export { assignmentListService } 