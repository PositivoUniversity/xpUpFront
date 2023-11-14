import { deleteData, editData, loadData, sendData } from "../connection";
import config from "../config";

const URL = config.URL_API
const URL_USERS = URL + '/users'
const URL_CREATE_USER = URL + '/Users/createUserDto'
const URL_DELETE_USER = URL + '/Users/:id'


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

export const editUser = async (urlParams, id) => {
    const URL_EDIT_USER = URL + '/User/editUser/' + id
    try {
        const response = await editData(URL_EDIT_USER, urlParams);
        return response;
    } catch (error) {
        console.error('Erro ao Editar usuário:', error);
        console.log(URL_EDIT_USER)
        throw error;
    }
}

export const deleteUser = async () => {
    try {
        const response = await deleteData(URL_DELETE_USER);
        return response;
    } catch (error) {
        console.error('Erro ao remvoer usuário:', error);
        console.log(URL_DELETE_USER)
        throw error;
    }
}

