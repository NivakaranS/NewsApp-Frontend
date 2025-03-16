
import axios from 'axios';

const BASE_URL = 'https://news-app-backend-4rb1.vercel.app';

export async function getOpinion() {
    try {
        const response = await axios.get(BASE_URL + '/opinions', {
            withCredentials: true
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createOpinion() {
    try {
        const response = await axios.post(BASE_URL + '/opinion', {
            withCredentials: true
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}