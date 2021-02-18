import Axios from '../../Helpers/appConfig'


const timeTableService = () => {
    const body =
    {
        "search": [{ "searchfield": "startdate", "searchvalue": "2021-02-26", "criteria": "eq", "datatype": "text" },
        { "searchfield": "classid", "searchvalue": "602cdc05d3d28535509cc01c", "criteria": "eq", "datatype": "objectid" },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }]
    }
    return Axios.post('classschedules/filter', body)
}

export { timeTableService } 