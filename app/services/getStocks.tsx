
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export async function getStocks() {
    try {
        const response = await axios.get(BASE_URL + '/stocks');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
