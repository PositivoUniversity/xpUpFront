import { loadData } from "../connection";

const URL = process.env.URL;
const COURSES = '/courses';

export const loadCourses = async () => {
    try {
        const data = await loadData(URL+COURSES);
        return data;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
