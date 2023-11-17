import config from "../config";
import { deleteData, loadData, sendData } from "../connection";

const URL = config.URL_API
const COURSES = '/courses';
const CREATE_COURSE = '/Courses/CreateCourseDto';

export const loadCourses = async () => {
    try {
        const data = await loadData(URL + COURSES);
        return data;
    } catch (error) {
        console.error('Erro ao buscar cursos:', error);
        throw error;
    }
}
export const createCourses = async (urlParams) => {
    try {
        const response = await sendData(URL + CREATE_COURSE, urlParams);
        return JSON.stringify(response);
    } catch (error) {
        console.error('Erro ao criar curso:', error);
        throw error;
    }
}

export const deleteCourse = async (id) => {
    const URL_DELETE_COURSE = URL + '/Courses/' + id
    try {
        const response = await deleteData(URL_DELETE_COURSE);
        return JSON.stringify(response);
    } catch (error) {
        console.log('Erro ao remover Curso:', error);
        throw error;
    }
}


