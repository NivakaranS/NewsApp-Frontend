
import axios from "axios";

const BASE_URL = 'https://news-app-backend-4rb1.vercel.app';


export async function getAllNewsCategory() {
    try { const response = await axios.get(BASE_URL + '/newsCategory/');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export async function createNewsCategory(newsCategoryData: any) {
    try {
        const response = await axios.post(BASE_URL + '/newsCategory/create', {
            title: newsCategoryData.title,
            imageUrl: newsCategoryData.imageUrl
        });
        if(response.status === 200) {
            console.log("News Category saved successfully")
        }

    } catch(err) {
        console.error("Error in creating news category: ", err)
    }
}