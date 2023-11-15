import { loadData } from "../connection";
import config from "../config";

const URL = config.URL_API
const URL_ROLES = URL + '/users/roles'
export const loadRolesUsers = async () => {
    try {
        const data = await loadData(URL_ROLES);
        console.log("JAO CU DE FRECHA", data);
        return data;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}