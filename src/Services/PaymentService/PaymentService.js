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

function BillPaymentService(data) {
    const body = JSON.stringify(data)
    return Axios.post('payments', body);
}

export { getPaymentService, getPaymentSchedulesService, BillPaymentService }