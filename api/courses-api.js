import config from "../config";
import { loadData } from "../connection";

const URL = config.URL
const COURSES = '/courses';
// alterar conforme o final do end-point

export const loadCourses = async () => {
    try {
        const data = await loadData(URL + COURSES);
        return data;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
