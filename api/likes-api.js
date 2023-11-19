import config from "../config";
import { deleteData, loadData, sendData } from "../connection";

const URL = config.URL_API
const URL_LIKE = URL + '/Likes/'
const URL_CREATE_LIKE = URL + '/Likes/CreateLikesDto'

export const getLikes = async () => {
    try {
        const response = await loadData(URL_LIKE);
        return response;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}

export const createLike = async (params) => {
    try {
        const response = await sendData(URL_CREATE_LIKE, params);
        return response;
    } catch (error) {
        console.error('Erro ao tentar criar notícia:', error);
        console.log(URL_CREATE_LIKE)
        throw error;
    }
}

export const deleteLike = async (params) => {
    try {
        const response = await deleteData(URL_LIKE + params);
        return JSON.stringify(response);
    } catch (error) {
        console.error('Erro ao tentar deletar notícia:', error);
        console.log(URL_LIKE + params)
        throw error;
    }
}