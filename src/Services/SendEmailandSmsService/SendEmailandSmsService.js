import Axios from '../../Helpers/appConfig'

const SendEmailService = (body) => {
    return Axios.post('communications/send', body);
}

const SendSmsService = (body) => {
    return Axios.post('communications/send', body);
}

export { SendEmailService, SendSmsService };