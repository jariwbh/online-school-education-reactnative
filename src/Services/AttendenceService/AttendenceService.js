import Axios from '../../Helpers/appConfig'

const AttendenceService = (data) => {
    const body =
    {
        "search": [
            { "searchfield": "checkin", "searchvalue": data.datRange.gte, "criteria": "gte", "datatype": "Date", "cond": "and" },
            { "searchfield": "checkin", "searchvalue": data.datRange.lte, "criteria": "lte", "datatype": "Date", "cond": "and" },
            { "searchfield": "membrozid", "searchvalue": data.id, "criteria": "eq", "datatype": "ObjectId" }]
    }
    return Axios.post('attendances/filter', body)
}

const getTodayAttendenceService = (data) => {
    const body =
    {
        "search": [
            { "searchfield": "checkin", "searchvalue": data.date, "criteria": "fullday", "datatype": "Date" },
            { "searchfield": "membrozid", "searchvalue": data.id, "criteria": "eq", "datatype": "ObjectId" }]
    }
    console.log(`body`, body);
    return Axios.post('attendances/filter', body)
}

const AttendenceCalculateService = (id) => {
    const body =
    {
        "search": [{ "searchfield": "membrozid", "searchvalue": id, "criteria": "eq", "datatype": "ObjectId" },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }]
    }
    return Axios.post('attendances/filter', body)
}

const addAttendenceService = (body) => {
    return Axios.post('attendances', body)
}

export { AttendenceService, AttendenceCalculateService, addAttendenceService, getTodayAttendenceService }