import { sendData, loadData, deleteData, editData } from "../connection";
import config from "../config";


const URL = config.URL_API
const URL_EVENTS = URL + '/Events/'
const URL_CREATE_EVENT = URL + '/Events/createEventsDto'

export const createEvent = async (urlParams) => {
    try {
        const response = await sendData(URL_CREATE_EVENT, urlParams);
        return response;
    } catch (error) {
        throw error;
    }
}
export const getEvent = async () => {
    try {
        const response = await loadData(URL_EVENTS);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getEventById = async (id) => {

    try {
        const response = await loadData(URL_EVENTS + id);
        return response;
    } catch (error) {
        throw error;
    }
}

export const deleteEvent = async (id) => {

    try {
        const response = await deleteData(URL_EVENTS + id);
        return response;
    } catch (error) {
        throw error;
    }
}
