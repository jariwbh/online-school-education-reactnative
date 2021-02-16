import Axios from '../../Helpers/appConfig'

const EventListService = () => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq",
            "datatype": "text"
        }]
    }
    return Axios.post('events/filter', body)
}


export { EventListService } 