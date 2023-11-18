import { loadData } from "../connection";
import config from "../config";

const URL = config.URL_API
const URL_NEWS = URL + '/news'

export const getNews = async () => {
    try {
        const response = await loadData(URL_NEWS);
        return response;
    } catch (error) {
        console.error('Erro ao buscar notícias na news-api:', error);
        throw error;
    }
}