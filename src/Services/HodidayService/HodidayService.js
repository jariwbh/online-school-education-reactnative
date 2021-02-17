import Axios from '../../Helpers/appConfig'

const HodidayService = () => {
    const body =
    {
        "search": [{
            "searchfield": "formid", "searchvalue": "5b1e5a81a04aa41070137cc7", "criteria": "eq", "datatype": "ObjectId"
        },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }],
    }
    return Axios.post('formdatas/filter', body)
}

export { HodidayService } 