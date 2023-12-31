import config from "../config";
import { deleteData, loadData, sendData } from "../connection";

const URL = config.URL_API
const URL_NEWS = URL + '/News/'
const URL_CREATE_NEWS = URL + '/News/CreateNewsDto'

export const getNews = async () => {
    try {
        const response = await loadData(URL_NEWS);
        return response;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}

export const createNews = async (params) => {
    try {
        const response = await sendData(URL_CREATE_NEWS, params);
        return response;
    } catch (error) {
        console.error('Erro ao tentar criar notícia:', error);
        console.log(URL_CREATE_NEWS)
        throw error;
    }
}

export const deleteNews = async (id) => {
    try {
        const response = await deleteData(URL_NEWS + id);
        return response;
    } catch (error) {
        console.error('Erro ao tentar deletar notícia:', error);
        console.log(URL_NEWS + id)
        throw error;
    }
}
