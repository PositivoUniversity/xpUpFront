import config from "../config";
import { loadData } from "../connection";

const URL = config.URL
const COURSES = '/courses';

export const loadCourses = async () => {
    try {
        const data = await loadData(URL + COURSES);
        console.log(URL, "aquiii")
        return data;

    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
