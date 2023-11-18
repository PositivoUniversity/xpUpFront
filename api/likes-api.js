import { sendData, loadData, deleteData, editData } from "../connection";
import config from "../config";


const URL = config.URL_API
const URL_LIKES = URL + '/Likes/'
const URL_CREATE_LIKES = URL + '/Likes/createLikesDto'
const URL_EDIT_LIKES = URL + '/Likes/EditLikesDto'


export const getLikes = async () => {
    try {
        const response = await loadData(URL_LIKES);
        return response;
    } catch (error) {
        console.log("Erro no likes-api.js")
        throw error;
    }
}
export const createLike = async (urlParams) => {
    try {
      const response = await sendData(URL_CREATE_LIKES, urlParams);
      return response;
    } catch (error) {
        console.log("Erro no Likes-api.js")
      throw error;
    }
  };

  export const deleteLike = async (id) => {

    try {
        const response = await deleteData(URL_LIKES + id);
        return response;
    } catch (error) {
        throw error;
    }
}

export const editLike = async (id, urlParams) => {

    try {
        const response = await editData(URL_EDIT_LIKES + id, urlParams);
        return response;
    } catch (error) {
        throw error;
    }
}