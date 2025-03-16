
import axios from "axios";

const BASE_URL = 'https://news-app-backend-4rb1.vercel.app';

export async function getNews() {
    try {
        const response = await axios.get(BASE_URL + '/news', {
            withCredentials: true
        });
    console.log(response.data);
    return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function createNews(newsData: any) {
    try {
        const response = await axios.post(BASE_URL + '/news/create', {
            title: newsData.title,
            subTitle: newsData.subTitle,
            
            content: newsData.content,
            category: newsData.category,
            imageUrl: newsData.imageUrl,
            description: newsData.description
            
        },{ withCredentials: true});
        if(response.status === 200) {
            console.log("News saved successfully")
        }

    } catch(err) {
        console.error("Error in creating news: ", err)
    }
}

export async function updateManyNews(newsData: any) {
    try {
        const response = await axios.post(BASE_URL + '/news/updateAll', newsData, {
            withCredentials: true
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateNewsPriority(id: any) {
    try {
        const response = await axios.put(BASE_URL + '/news/updatePriority', id, {
            withCredentials: true
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getNewsById(id: any) {
    const response = await axios.get(BASE_URL + '/news/' + id, {withCredentials: true});
    console.log(response.data);
    return response.data;
}

export async function getNewsByCategory(category: any) {
    try { const response = await axios.post(BASE_URL + '/news/category/', {
        category: category
    }, {
        withCredentials: true
    });
    console.log(response.data);
    return response.data;
    } catch (error) {
        console.log(error);
    }
}

