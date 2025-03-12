
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export async function getOpinion() {
    try {
        const response = await axios.get(BASE_URL + '/opinions');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createOpinion() {
    try {
        const response = await axios.post(BASE_URL + '/opinion');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}