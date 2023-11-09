import config from "../config";
import { loadData } from "../connection";

// const URL = config.URL
const COURSES = 'https://randomuser.me/api/?results=1';


export const loadUsers = async () => {
    try {
        const data = await loadData(COURSES);
        return data;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
