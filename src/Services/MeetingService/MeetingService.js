import Axios from '../../Helpers/appConfig'

const meetingService = (id) => {
    const body =
    {
        "search": [{
            "searchfield": "formid",
            "searchvalue": "60d03a36c2943430d832314e",
            "criteria": "eq",
            "datatype": "ObjectId"
        },
        {
            "searchfield": "property.course",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "ObjectId"
        },
        {
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq",
            "datatype": "text"
        }
        ], "formname": "meeting"
    }
    return Axios.post('formdatas/filter', body)
}

export { meetingService };