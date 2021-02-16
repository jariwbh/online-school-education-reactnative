import Axios from '../../Helpers/appConfig'

const body =
{
    "search": [{
        "searchfield": "formid", "searchvalue": "5ced12b88f6dad23b892185d", "criteria": "eq", "datatype": "ObjectId"
    },
    { "searchfield": "status", "searchvalue": "active", "criteria": "eq" }], "formname": "poscategory"
}

function SchoolGalleryService() {
    return Axios.post('formdatas/filter', body);
}

export default SchoolGalleryService;