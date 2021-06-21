import Axios from '../../Helpers/appConfig'

const body =
{
    "search": [
        { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }]
}

function SchoolGalleryService() {
    return Axios.post('documents/filter', body);
}

export default SchoolGalleryService;