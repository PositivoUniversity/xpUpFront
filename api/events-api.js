import { sendData } from "../connection";
import config from "../config";

const URL = config.URL_API
const URL_EVENTS = URL + '/events'
const URL_CREATE_EVENT = URL + '/Events/createEventsDto'

export const createEvent = async (urlParams) => {
    try {
        const response = await sendData(URL_CREATE_EVENT, urlParams);
        return response;
    } catch (error) {
        console.error('Erro ao criar evento na events-api:', error);
        throw error;
    }
}