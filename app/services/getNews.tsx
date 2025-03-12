
import axios from "axios";

const BASE_URL = 'http://localhost:5000';

export async function getNews() {
    try {
        const response = await axios.get(BASE_URL + '/news');
    console.log(response.data);
    return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getNewsById(id: any) {
    const response = await axios.get(BASE_URL + '/news/' + id);
    console.log(response.data);
    return response.data;
}

export async function getNewsByCategory(category: any) {
    try { const response = await axios.post(BASE_URL + '/news/category/', {
        category: category
    });
    console.log(response.data);
    return response.data;
    } catch (error) {
        console.log(error);
    }
}

