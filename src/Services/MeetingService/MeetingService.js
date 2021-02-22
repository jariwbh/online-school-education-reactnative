import Axios from '../../Helpers/appConfig'

const meetingService = () => {
    const body =
    {
        "search": [{
            "searchfield": "formid",
            "searchvalue": "5ea921002b81e33d2ccc07f0",
            "criteria": "eq",
            "datatype": "ObjectId"
        }]
    }
    return Axios.post('formdatas/filter', body)
}


export { meetingService } 