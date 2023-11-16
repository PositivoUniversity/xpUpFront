import { sendData } from "../connection";
import config from "../config";

const URL = config.URL_API;
const URL_CREATE_USERS = URL + '/users/createUserDto';

export const registerUsers = async (urlParams) => {
    try {
        const response = await sendData(URL_CREATE_USERS, urlParams);
        return response;
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        throw error;
    };
}