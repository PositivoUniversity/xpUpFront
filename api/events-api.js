import { loadData, sendData } from "../connection";
import config from "../config";

const URL = config.URL_API
const URL_EVENTS = URL + '/events'
const URL_CREATE_EVENT = URL + '/Events/createEventsDto'
// const URL_DELETE_EVENT = URL + '/Events/:id'

// const URL = config.URL_API
// const URL_USERS = URL + '/users'
// const URL_CREATE_USER = URL + '/Users/createUserDto'
// const URL_EDIT_USER = URL + '/Users'
// const URL_DELETE_USER = URL + '/Users/:id'

export const createEvent = async (urlParams) => {
    try {
        const response = await sendData(URL_CREATE_EVENT, urlParams);
        console.log("Evento criado")
        console.log(urlParams)
        return response;
    } catch (error) {
        console.error('Erro ao criar evento na events-api:', error);
        console.log(URL_CREATE_EVENT)
        throw error;
    }
}