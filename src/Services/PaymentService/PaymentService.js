import Axios from '../../Helpers/appConfig'

const getPaymentService = (id) => {
    const body = {
        "search": [{
            "searchfield": "memberid", "searchvalue": id, "criteria": "eq", "datatype": "ObjectId"
        }]
    }
    return Axios.post('payments/filter', body)
}

const getPaymentSchedulesService = (id) => {
    const body = {
        "search": [{
            "searchfield": "memberid", "searchvalue": id, "criteria": "eq", "datatype": "ObjectId"
        },
        {
            "searchfield": "status", "searchvalue": "Paid", "criteria": "ne", "datatype": "text"
        }]
    }
    return Axios.post('paymentschedules/filter', body)
}

export { getPaymentService, getPaymentSchedulesService } 