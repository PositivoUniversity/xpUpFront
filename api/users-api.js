import { deleteData, editData, loadData, sendData } from "../connection";
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
        return JSON.stringify(response);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
}

export const editUser = async (urlParams, id) => {
    const URL_EDIT_USER = URL + '/Users/editUser/' + id
    try {
        const response = await editData(URL_EDIT_USER, urlParams);
        if (!response) {
            return;
        }
        return JSON.stringify(response);

    } catch (error) {
        console.error('Erro ao Editar usuário:', error);
        console.log(URL_EDIT_USER)
        throw error;
    }
}

export const deleteUser = async (id) => {
    const URL_DELETE_USER = URL + '/Users/' + id
    try {
        const response = await deleteData(URL_DELETE_USER);
        return JSON.stringify(response);
    } catch (error) {
        console.error('Erro ao remvoer usuário:', error);
        throw error;
    }
}

