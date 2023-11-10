import { loadData } from "../connection";
import config from "../config";

const URL = config.URL_API
const URL_USERS = URL + '/users'
export const loadUsers = async () => {
    try {
        const data = await loadData(URL_USERS);
        return data;

    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
