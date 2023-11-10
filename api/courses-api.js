import config from "../config";
import { loadData } from "../connection";

const URL = config.URL_API
const COURSES = 'courses';

export const loadCourses = async () => {
    try {
        const data = await loadData(URL + COURSES);
        return data;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
