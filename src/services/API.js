import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;
const machine = process.env.REACT_APP_MACHINE_CODE;
const emailCode = process.env.REACT_APP_EMAIL_SEQUENCE_CODE;
const sequenceLevel = process.env.REACT_APP_SEQUENCE_LEVEL_CODE;

function SendLead({name, email, phone, utm_source, utm_medium, utm_campaign, utm_content, utm_term}) {

    

    const body = {
        Name: name,
        Email: email,
        MachineCode: machine,
        EmailSequenceCode: emailCode,
        SequenceLevelCode: sequenceLevel,
        Phone: phone,
        Parameters: {
            UTMSource: utm_source,
            UTMMedium: utm_medium,
            UTMCampaign: utm_campaign,
            UTMTerm: utm_content,
            UTMContent: utm_term,
        }
    }

    return axios.post(`https://llapi.leadlovers.com/webapi/Lead?token=${token}`, body);
}

const api = {
    SendLead
};

export default api;
