import { sendData, loadData, deleteData, editData } from "../connection";
import config from "../config";


const URL = config.URL_API
const URL_CHECKIN = URL + '/Checkins/'
const URL_CREATE_CHECKIN = URL + '/Checkins/createCheckinDto'


export const getCheckin = async () => {
    try {
        const response = await loadData(URL_CHECKIN);
        return response;
    } catch (error) {
        console.log("Erro no checkin-api.js")
        throw error;
    }
}
export const createCheckin = async (urlParams) => {
    try {
      const response = await sendData(URL_CREATE_CHECKIN, urlParams);
      return response;
    } catch (error) {
        console.log("Erro no checkins-api.js")
      throw error;
    }
  };

  export const deleteCheckin = async (id) => {

    try {
        const response = await deleteData(URL_CHECKIN + id);
        return response;
    } catch (error) {
        throw error;
    }
}