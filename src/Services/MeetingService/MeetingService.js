import Axios from '../../Helpers/appConfig'

const meetingService = () => {
    const body =
    {
        "search": [{
            "searchfield": "formid",
            "searchvalue": "60d03a36c2943430d832314e",
            "criteria": "eq",
            "datatype": "ObjectId"
        }], "formname": "meeting"
    }
    return Axios.post('formdatas/filter', body)
}


export { meetingService }