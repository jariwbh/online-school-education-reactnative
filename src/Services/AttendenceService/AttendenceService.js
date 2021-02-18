import Axios from '../../Helpers/appConfig'

const AttendenceService = (data) => {

    const body =
    {
        "search": [{ "searchfield": "membrozid", "searchvalue": data.id, "criteria": "eq", "datatype": "ObjectId" },
        { 'searchfield': 'checkin', 'searchvalue': data.datRange, 'criteria': 'eq' },
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }]
    }
    return Axios.post('attendances/filter', body)
}

export { AttendenceService } 