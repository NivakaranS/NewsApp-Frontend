

import axios from "axios";
import { NextResponse } from 'next/server';



const BASE_URL = 'https://news-app-backend-4rb1.vercel.app';


export async function getUsers() {
    try {
        const response = await axios.get(BASE_URL + '/users');
    console.log(response.data);
    return response.data;
    } catch (error) {
        console.log(error);
    }
}
export async function login(data: any) {
    try {
        await axios.post("https://news-app-backend-4rb1.vercel.app/users/auth/login", {
            email: data.email,
            password: data.password
        }, {withCredentials: true})
        

        console.log("Login successful");
        
       

       
    } catch (err: any) {
        console.error("Error in login:", err);

        if (err.response) {
            
            console.error("Error response:", err.response.data);
            console.error("Status code:", err.response.status);
            return { error: "Login failed", details: err.response.data };
        } else if (err.request) {
            
            console.error("No response received:", err.request);
            return { error: "Network error, please try again" };
        } else {
            
            console.error("Unexpected error:", err.message);
            return { error: "An unexpected error occurred", details: err.message };
        }
    }
}


export function logout() {
    axios.post("https://news-app-backend-4rb1.vercel.app/users/auth/logout", {}, {withCredentials: true})
    .then((response) => {
        window.location.href = "/";
        console.log(response.data);
        return response.data;
    })
    .catch((err) => {
        console.error("Error in logout: ", err);
    });
}

export async function createUser(data: any) {
    try {
        const response = await axios.post(BASE_URL + '/users/create', {
            firstName: data.firstName,
            lastName: data.lastName,
            dob: data.dob,
            phoneNumber: data.phoneNumber,
            email: data.email,
            password: data.password,
            gender: data.gender,
            type: data.type
        });
        if(response.status === 200) {
            console.log("User saved successfully")
        }
        return response;

    } catch(err) {
        console.error("Error in creating user: ", err)
    }
}