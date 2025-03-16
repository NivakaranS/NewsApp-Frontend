
import axios from 'axios';

const BASE_URL = 'https://news-app-backend-4rb1.vercel.app';

export async function getStocks() {
    try {
        const response = await axios.get(BASE_URL + '/stocks', {
            withCredentials: true
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
