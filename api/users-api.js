import { loadData, sendData } from "../connection";
import config from "../config";

const URL = config.URL_API
const URL_USERS = URL + '/users'
const URL_CREATE_USER = URL + '/Users/createUserDto'

export const loadUsers = async () => {
    try {
        const data = await loadData(URL_USERS);
        return data;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        throw error;
    }
}
export const createUser = async (urlParams) => {
    try {
        const response = await sendData(URL_CREATE_USER, urlParams);
        return response;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        console.log(URL_CREATE_USER)
        throw error;
    }
}
