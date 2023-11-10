import config from "../config";
import { loadData } from "../connection";

const URL = config.URL
const URL_USERS = `${URL}/users`;



export const loadUsers = async () => {
    try {
        const data = await loadData(URL_USERS);
        return data;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
