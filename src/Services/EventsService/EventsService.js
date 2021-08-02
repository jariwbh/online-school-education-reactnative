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

const CircularListService = () => {
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
            "searchvalue": "5e945027df559b3e68fd6939",
            "criteria": "eq",
            "datatype": "ObjectId"
        },
        ]
    }
    return Axios.post('formdatas/filter', body)
}

export { EventListService, CircularListService };