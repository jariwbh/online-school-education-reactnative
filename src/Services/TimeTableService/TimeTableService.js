import Axios from '../../Helpers/appConfig'

const timeTableService = (data) => {
    let classid = data.classid;
    let date = data.date;

    const body =
    {
        "search": [{ "searchfield": "startdate", "searchvalue": date, "criteria": "eq", "datatype": "text" },
        { "searchfield": "classid", "searchvalue": classid, "criteria": "eq", "datatype": "objectid" },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }], "sort": { "startdate": -1 }
    }
    return Axios.post('classschedules/filter', body)
}

export { timeTableService } 