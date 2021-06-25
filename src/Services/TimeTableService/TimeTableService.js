import Axios from '../../Helpers/appConfig'

const timeTableService = (data) => {
    let couresid = data.couresid;
    let date = data.date;
    const body =
    {
        "search": [
            { "searchfield": "date", "searchvalue": date, "criteria": "fullday", "datatype": "Date" },
            { "searchfield": "courseid", "searchvalue": couresid, "criteria": "eq", "datatype": "objectid" },
            { "searchfield": "status", "searchvalue": "Confirmed", "criteria": "eq" }], "sort": { "startdate": -1 }
    }
    console.log(`body`, body);
    return Axios.post('classschedules/filter', body)
}

export { timeTableService }